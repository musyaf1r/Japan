document.addEventListener('DOMContentLoaded', function() {
    const destinations = [
        {
            id: 1,
            name: "Mount Fuji",
            description: "Japan's highest mountain and an iconic symbol of the country. A UNESCO World Heritage site.",
            rating: 4.9,
            image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSzVGvbvHmCelfYbaBqqZrAbIRlocv_mVbuhsP8qFbWORRM_3el98cnUH6hRXQVCU5162VtAG5LGHGDTg8DTeuUFSs&s=19"
        },
        {
            id: 2,
            name: "Tokyo Skytree",
            description: "A broadcasting and observation tower in Sumida, Tokyo. The tallest structure in Japan.",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            name: "Fushimi Inari Shrine",
            description: "Famous for its thousands of vermillion torii gates that straddle a network of trails.",
            rating: 4.8,
            image: "https://www.agoda.com/wp-content/uploads/2024/07/Fushimi-Inari-Shrine-Kyoto-Japan.jpg"
        },
        {
            id: 4,
            name: "Osaka Castle",
            description: "A Japanese castle in Chūō-ku, Osaka, on top of a plot of land once occupied by Ichijō-ji Temple.",
            rating: 4.6,
            image: "https://osakacastle.org/wp-content/uploads/2025/01/Osaka-Castle-Spring-2.jpg"
        },
        {
            id: 5,
            name: "Arashiyama Bamboo Grove",
            description: "A forest of bamboo in Arashiyama, Kyoto, Japan. A spectacular sight and a serene walking experience.",
            rating: 4.9,
            image: "https://arashiyamabambooforest.com/wp-content/uploads/2024/09/Arashiyama-Bamboo-Grove.jpg"
        },
        {
            id: 6,
            name: "Hiroshima Peace Memorial",
            description: "A complex of buildings in Hiroshima, Japan, that were left as ruins after the atomic bombing.",
            rating: 4.7,
            image: "https://www.wendywutours.co.uk/resource/upload/918/banner-peace-park.jpg.webp"
        },
        {
            id: 7,
            name: "Shirakawa-go",
            description: "A mountain village in Gifu Prefecture, Japan, famous for its traditional gassho-zukuri farmhouses.",
            rating: 4.8,
            image: "https://cdn.shopify.com/s/files/1/0680/4094/9989/files/Winter_Light-up_shirakawago_480x480.jpg?v=1720235919"
        },
        {
            id: 8,
            name: "Kinkaku-ji (Golden Pavilion)",
            description: "A Zen temple in Kyoto whose top two floors are completely covered in gold leaf.",
            rating: 4.7,
            image: "https://img.freepik.com/free-photo/golden-pavilion-kinkakuji-temple-autumn-kyoto-japan_335224-52.jpg"
        }
    ];

    const cardsContainer = document.getElementById('cardsContainer');

    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}" class="card-img">
            <div class="card-content">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="rating">${'★'.repeat(Math.floor(destination.rating))}${'☆'.repeat(5 - Math.floor(destination.rating))} ${destination.rating}/5</div>
                <button>View Details</button>
            </div>
        `;
        
        cardsContainer.appendChild(card);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to cards when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});