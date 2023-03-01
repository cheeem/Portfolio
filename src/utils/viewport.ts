let intersectionObserver: IntersectionObserver

export const viewport = (element: HTMLElement | SVGElement) => {

	ensureIntersectionObserver()

	intersectionObserver.observe(element)

	return {
		destroy() {
			intersectionObserver.unobserve(element)
		}
	}

}

const ensureIntersectionObserver = () => {

  if (intersectionObserver) return

  intersectionObserver = new IntersectionObserver((entries) => {
        
        entries.forEach(entry => {
            
            const eventName = entry.isIntersecting ? 'viewportEnter' : 'viewportExit'
            
            entry.target.dispatchEvent(new CustomEvent(eventName))

        });

    });
  
}