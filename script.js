/* =========================
   TEKS MENGETIK
========================= */

const tulisan =
"Terima kasih sudah hadir di hidup Intan... ❤️";

let angka = 0;


function ketik() {

    if (angka < tulisan.length) {

        document.getElementById(
            "typing"
        ).textContent += tulisan[angka];

        angka++;

        setTimeout(
            ketik,
            60
        );

    }

}


ketik();



/* =========================
   LOVE MELAYANG
========================= */

const tempatLove =
document.getElementById("hearts");


function buatLove() {

    const love =
    document.createElement("div");

    love.className =
    "heart";


    const pilihanLove = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💞"
    ];


    love.innerHTML =
        pilihanLove[
            Math.floor(
                Math.random()
                * pilihanLove.length
            )
        ];


    love.style.left =
        Math.random() * 100 + "%";


    love.style.fontSize =
        Math.random() * 18 + 15 + "px";


    love.style.animationDuration =
        Math.random() * 4 + 5 + "s";


    tempatLove.appendChild(love);


    setTimeout(
        () => love.remove(),
        9000
    );

}


setInterval(
    buatLove,
    500
);



/* =========================
   TOMBOL BUKA PESAN
========================= */

function bukaPesan() {

    document
        .getElementById("surat")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================
   JAWABAN
========================= */

function jawab() {

    document
        .getElementById("jawaban")
        .innerHTML =
        "🥹❤️ Terima kasih sudah memilih untuk tetap di sini. Semoga cerita kita selalu punya alasan untuk terus dilanjutkan. Intan sayang kamu. ❤️";


    // Love tambahan

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            buatLove,
            i * 100
        );

    }

}
