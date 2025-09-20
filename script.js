// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
    // Add smooth scrolling to all links with hash
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach((link) => {
        link.addEventListener("click", function(e) {
            e.preventDefault()

            const targetId = this.getAttribute("href")
            const targetSection = document.querySelector(targetId)

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        })
    })

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-up")
            }
        })
    }, observerOptions)

    // Observe all sections for animations
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
        observer.observe(section)
    })

    // Add hover effects for feature cards
    const featureCards = document.querySelectorAll(".feature-card")
    featureCards.forEach((card) => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px)"
        })

        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)"
        })
    })

    // Parallax effect for hero section (subtle)
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset
        const heroSection = document.querySelector(".hero-section")

        if (heroSection) {
            const rate = scrolled * -0.5
            heroSection.style.transform = `translateY(${rate}px)`
        }
    })
})

function downloadAPK() {
    // Create a temporary link element to trigger download
    const link = document.createElement("a")
    link.href = "downloads/trash2cash.apk"
    link.download = "trash2cash.apk"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

// Add loading animation when page loads
window.addEventListener("load", () => {
    document.body.classList.add("loaded")
})