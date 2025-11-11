// Data for Notes 
const subjects = [
    {
        title: "Physics",
        description: "click to view chapter wise notes",
        chapters: [
            { name: "chapter 1", file: "" },
            { name: "chapter 2", file: "" },
            { name: "chapter 3", file: "" },
            { name: "chapter 4", file: "" },
        ]
    },
    {
        title: "Chemistry",
        description: "click to view chapter wise notes",
        chapters: [
            { name: "chapter 1", file: "" },
            { name: "chapter 2", file: "" },
            { name: "chapter 3", file: "" },
            { name: "chapter 4", file: "" },

        ]
    },
    {
        title: "Mathematics",
        description: "click to view chapter wise notes",
        chapters: [
            { name: "chapter 1", file: "" },
            { name: "chapter 2", file: "" },
            { name: "chapter 3", file: "" },
            { name: "chapter 4", file: "" },

        ]
    },
    {
        title: "Biology",
        description: "click to view chapter wise notes",
        chapters: [
            { name: "chapter 1", file: "" },
            { name: "chapter 2", file: "" },
            { name: "chapter 3", file: "" },
            { name: "chapter 4", file: "" },

        ]
    }
];
const notesGrid = document.getElementById('notes-grid');

// Render Subjects
function renderSubjects() {
    notesGrid.innerHTML = '';
    subjects.forEach(subject => {
        const shortCode = subject.title.slice(0, 2).toUpperCase();
        const card = document.createElement('div');
        card.classList.add('note-card');
        card.innerHTML = `
      <div class="note-icon">${shortCode}</div>
      <div class="note-content">
        <h3>${subject.title}</h3>
        <p>${subject.description}</p>
      </div>
      <span class="note-arrow">➜</span>
    `;
        // when clicked, show chapters
        card.addEventListener('click', () => renderChapters(subject));
        notesGrid.appendChild(card);
    });
}

// Render Chapters
function renderChapters(subject) {
    notesGrid.innerHTML = `<h2>${subject.title} - Chapters</h2>`;

    subject.chapters.forEach(chapter => {
        const card = document.createElement('div');
        card.classList.add('note-card');
        card.innerHTML = `
      <div class="note-content">
        <h3>${chapter.name}</h3>
      </div>
      <span class="note-arrow">➜</span>
    `;
        // click to open file or show message
        card.addEventListener('click', () => {
            if (chapter.file && chapter.file.trim() !== "") {
                window.open(chapter.file, '_blank');
            } else {
                showMessage(`Notes for "${chapter.name}" will be uploaded soon 📚`);
            }
        });
        notesGrid.appendChild(card);
    });

    // Add a back button
    const backBtn = document.createElement('button');
    backBtn.textContent = "← Back to Subjects";
    backBtn.classList.add('back-btn');
    backBtn.addEventListener('click', renderSubjects);
    notesGrid.prepend(backBtn);
}

// Message Function 
function showMessage(msg) {
    const oldMsg = document.querySelector('.alert-message');
    if (oldMsg) oldMsg.remove();

    const message = document.createElement('div');
    message.classList.add('alert-message');
    message.textContent = msg;
    document.body.appendChild(message);

    setTimeout(() => message.remove(), 3000);
}

// Initial render
renderSubjects();


// Data for Photos 

document.addEventListener("DOMContentLoaded", () => {
    const eventCards = document.querySelectorAll(".event-card");
    const eventList = document.getElementById("event-list");
    const galleryView = document.getElementById("gallery-view");
    const galleryGrid = document.getElementById("gallery-grid");
    const backBtn = document.getElementById("back-btn");

    const eventImages = {
        annual: [
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762792643/samples/ecommerce/analog-classic.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762792646/samples/bike.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762792645/samples/landscapes/girl-urban-view.jpg",
        ],
        sports: [

        ],
        science: [
            "https://source.unsplash.com/random/600x800?science",

        ]
    };

    // Open Gallery View
    eventCards.forEach(card => {
        card.addEventListener("click", () => {
            const eventKey = card.getAttribute("data-event");
            const images = eventImages[eventKey] || [];

            galleryGrid.innerHTML = images
                .map(src => `<img src="${src}" alt="${eventKey} photo">`)
                .join("");

            eventList.classList.add("hidden");
            galleryView.classList.add("visible");
        });
    });

    // Back Button
    backBtn.addEventListener("click", () => {
        galleryView.classList.remove("visible");
        eventList.classList.remove("hidden");
        galleryGrid.innerHTML = "";
    });
});



// Navigation Handling
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
        document.getElementById(btn.dataset.section).classList.add('active');
    });
});
// Lightbox Functionality
function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    img.alt = alt;
    lightbox.style.display = 'flex';
}

document.getElementById('close-lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});

// Contact Form Placeholder
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a placeholder. Integrate with an email API for real sending.)'); // Replace with actual API call
    e.target.reset();
});


// Initial Rende
renderNotes();
renderPhotos();
renderFiles();