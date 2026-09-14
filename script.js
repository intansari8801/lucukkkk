/* =====================
   EFEK MENGETIK
===================== */

const tulisan =
"Terima kasih sudah hadir di hidup Intan... ❤️";

let i = 0;

function ketik() {

    if (i < tulisan.length) {

        document.getElementById(
            "typing"
        ).innerHTML += tulisan[i];

        i++;

        setTimeout(
            ketik,
            60
        );

    }

}

ketik();



/* =====================
   LOVE MELAYANG
===================== */

const hearts =
document.getElementById("hearts");


function buatLove() {

    const love =
    document.createElement("div");

    love.className =
    "heart";

    const pilihan = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘"
    ];

    love.innerHTML =
        pilihan[
            Math.floor(
                Math.random()
                * pilihan.length
            )
        ];

    love.style.left =
        Math.random() * 100 + "%";

    love.style.fontSize =
        Math.random() * 18 + 15 + "px";

    love.style.animationDuration =
        Math.random() * 4 + 5 + "s";

    hearts.appendChild(love);


    setTimeout(() => {

        love.remove();

    }, 9000);

}


setInterval(
    buatLove,
    500
);



/* =====================
   BUKA SURAT
===================== */

function bukaWebsite() {

    document
        .getElementById("surat")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =====================
   JAWABAN
===================== */

function jawab() {

    document
        .getElementById("jawaban")
        .innerHTML =
        "🥹❤️ Terima kasih sudah memilih untuk tetap di sini. Semoga cerita kita selalu punya alasan untuk terus dilanjutkan. Intan sayang kamu. ❤️";

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
