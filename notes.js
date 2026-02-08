// Data for Notes 
const subjects = [
    {
        title: "PYQ",
        description: "Prevoius year questions",
        chapters: [
            { name: "pre boards 2025", file: "https://drive.google.com/file/d/1VwecUWn449qh-W-GpytKinHCX1Cl2SSP/view?usp=drivesdk" },

 { name: "class 9pyq", file: "https://drive.google.com/file/d/17fV5ryZHUr7t3WFO6t6Ko3k91hOOaItg/view?pli=1" },
        ]
    },

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
    },

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
                showMessage(` "${chapter.name}" will be uploaded soon 📚`);
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
    const CLOUD_NAME = "dw7fvcoxu";
    const tagEvents = {
        SUPW2025: "SUPW2025"
    };

    const eventImages = {
        Teachers_Day: ["https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861639/img21_ke8j8g.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861623/img1_tigmc3.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861622/img2_krycwn.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861624/img8_i8xyc6.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861624/img9_y4mizd.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861623/img3_ry2uat.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861624/img4_a0r1pe.jpg ",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861627/img5_i6tv0c.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861628/img10_zbeqdg.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861628/img6_fqswqe.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861630/img11_khxj8l.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861631/img13_cllput.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861630/img12_zleart.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861634/img16_r0a0az.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861634/img15_w7oaus.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861635/img14_qgoskt.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861636/img20_sgl9gl.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861635/img18_ijagxi.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861636/img19_j5zwmi.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861637/img22_ojffoc.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861640/img23_nnqtrr.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861639/img17_krbhbj.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861641/img25_pqldxk.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861641/img27_fkam5a.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861639/img26_rm5q35.jpg",
            "https://res.cloudinary.com/dw7fvcoxu/image/upload/v1762861640/img24_eqxvuq.jpg",
        ],








    };

    // Open Gallery View
    eventCards.forEach(card => {
        card.addEventListener("click", async () => {
            const eventKey = card.getAttribute("data-event");

            if (tagEvents[eventKey]) {
                const tag = tagEvents[eventKey];
                const jsonURL = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${tag}.json`;

                try {
                    const response = await fetch(jsonURL);
                    const data = await response.json();



                    galleryGrid.innerHTML = data.resources
                        .map(img => {
                            const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${img.public_id}.${img.format}`;
                            return `<img src="${url}" alt="${eventKey} photo">`;
                        })
                        .join("");

                } catch (error) {
                    galleryGrid.innerHTML = "<p>Failed to load images.</p>";
                }


            } else {
                // DEFAULT LOCAL IMAGES
                const images = eventImages[eventKey] || [];

                galleryGrid.innerHTML = images
                    .map(src => `<img src="${src}" alt="${eventKey} photo">`)
                    .join("");
            }

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


const form = document.getElementById("contact-form");
const notification = document.getElementById("form-notification");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            showNotification("✅ Message sent successfully!");
            form.reset();
        } else {
            showNotification("❌ Failed to send message. Try again.");
        }

    } catch (error) {
        showNotification("⚠️ Network error. Please try later.");
    }
});

function showNotification(message) {
    notification.textContent = message;
    notification.classList.remove("hidden");

    setTimeout(() => {
        notification.classList.add("hidden");
    }, 3000);
}

