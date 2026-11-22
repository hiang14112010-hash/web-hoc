const templates = [
  {
    name: "Tạp chí",
    subject: "Thành phố cần cây",
    theme: "editorial",
    slides: [
      `<div class="editorial-cover">
        <div class="cover-copy">
          <p class="kicker">Môi trường đô thị</p>
          <h3>Thành phố<br>cần cây.</h3>
          <p>Nhìn lại vai trò của bóng mát và không gian xanh.</p>
        </div>
        <img src="images/forest.webp" alt="" width="1200" height="1200">
      </div>`,
      `<div class="slide-body editorial-comparison">
        <p class="kicker">Không gian sống</p>
        <h3>Một con phố,<br>hai trải nghiệm.</h3>
        <div class="columns">
          <div><strong>Ít bóng mát</strong><p>Người đi bộ tiếp xúc trực tiếp với nắng và thường tìm chỗ trú.</p></div>
          <div><strong>Có tán cây</strong><p>Bóng râm tạo thêm chỗ dừng chân và khoảng nghỉ cho người đi bộ.</p></div>
        </div>
      </div>`,
      `<div class="slide-body editorial-end">
        <p class="kicker">Đề xuất</p>
        <h3>Bắt đầu từ<br>sân trường.</h3>
        <ol class="actions">
          <li>Đánh dấu chỗ nắng nhất vào giờ ra chơi.</li>
          <li>Chọn nơi cần bóng mát, tránh lối đi và đường dây.</li>
          <li>Cùng nhà trường lên lịch chăm sóc cây.</li>
        </ol>
      </div>`
    ]
  },
  {
    name: "Phòng thí nghiệm",
    subject: "Lá cây và ánh sáng",
    theme: "lab",
    slides: [
      `<div class="lab-cover">
        <div class="cover-copy">
          <p class="kicker">Sinh học · Quang hợp</p>
          <h3>Lá cây và<br>ánh sáng</h3>
          <p>Cây dùng ánh sáng để tạo ra chất hữu cơ như thế nào?</p>
        </div>
        <img src="images/leaf.webp" alt="" width="1050" height="1050">
      </div>`,
      `<div class="slide-body lab-process">
        <p class="kicker">Quá trình</p>
        <h3>Quang hợp</h3>
        <p>Nhờ năng lượng ánh sáng, cây tạo đường từ nước và khí cacbonic, đồng thời giải phóng ôxy.</p>
        <div class="flow">
          <div><span>Đầu vào</span><strong>CO₂ + nước</strong></div>
          <span aria-label="chuyển thành">→</span>
          <div><span>Sản phẩm</span><strong>Đường + O₂</strong></div>
        </div>
      </div>`,
      `<div class="slide-body lab-end">
        <p class="kicker">Quan sát</p>
        <h3>Ánh sáng ảnh hưởng<br>đến cây ra sao?</h3>
        <div class="columns">
          <div><strong>Chuẩn bị</strong><p>Hai chậu cùng loại, tưới cùng lượng nước. Đặt một chậu nơi sáng hơn.</p></div>
          <div><strong>Ghi lại</strong><p>Theo dõi sự thay đổi về màu lá và chiều cao mỗi ngày.</p></div>
        </div>
      </div>`
    ]
  },
  {
    name: "Sân khấu",
    subject: "Tạo thói quen đọc sách",
    theme: "stage",
    slides: [
      `<div class="stage-cover">
        <div class="cover-copy">
          <p class="kicker">Thói quen đọc</p>
          <h3>Mỗi ngày<br>một trang.</h3>
        </div>
        <div class="stage-medallion">10 <small>phút đọc</small></div>
      </div>`,
      `<div class="slide-body stage-idea">
        <p class="kicker">Cách bắt đầu</p>
        <h3>Chọn một<br>giờ cố định.</h3>
        <p>Đọc 10 phút sau bữa tối hoặc trước khi đi ngủ.</p>
      </div>`,
      `<div class="slide-body stage-end">
        <p class="kicker">Thử hôm nay</p>
        <h3>Mở sách.<br>Đọc một trang.</h3>
        <p>Đặt cuốn sách ở nơi bạn dễ nhìn thấy.</p>
      </div>`
    ]
  }
];

const gallery = document.querySelector("#templates");
const viewer = document.querySelector("#viewer");
const deckName = document.querySelector("#deck-name");
const deckSubject = document.querySelector("#deck-subject");
const slide = document.querySelector("#slide");
const count = document.querySelector("#slide-count");
const positions = document.querySelector("#positions");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let selected = 0;
let current = 0;

function slideMarkup(deck, index) {
  return `<article class="slide ${deck.theme}">${deck.slides[index]}</article>`;
}

const cards = templates.map((deck, index) => {
  const card = document.createElement("div");
  card.className = "template";
  card.innerHTML = `<div class="slide-frame thumbnail" aria-hidden="true">${slideMarkup(deck, 0)}</div>
    <div class="template-label"><button class="template-select" type="button">${deck.name}</button><small>${deck.slides.length} trang</small></div>`;
  const button = card.querySelector("button");
  button.addEventListener("click", () => {
    if (selected !== index) {
      selected = index;
      current = 0;
      render();
    }
    deckName.focus({preventScroll: true});
    viewer.scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
  });
  gallery.append(card);
  return button;
});

function showSlide(index) {
  if (index < 0 || index >= templates[selected].slides.length || index === current) return;
  current = index;
  render();
}

function render() {
  const deck = templates[selected];
  cards.forEach((card, index) => card.setAttribute("aria-pressed", String(index === selected)));
  deckName.textContent = deck.name;
  deckSubject.textContent = deck.subject;
  slide.innerHTML = slideMarkup(deck, current);
  count.textContent = `Trang ${current + 1} / ${deck.slides.length}`;
  if (positions.childElementCount !== deck.slides.length) {
    positions.replaceChildren(...deck.slides.map((_, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = String(index + 1);
      button.setAttribute("aria-label", `Trang ${index + 1}`);
      button.addEventListener("click", () => showSlide(index));
      return button;
    }));
  }
  [...positions.children].forEach((button, index) => {
    if (index === current) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });
  previous.setAttribute("aria-disabled", String(current === 0));
  next.setAttribute("aria-disabled", String(current === deck.slides.length - 1));
}

previous.addEventListener("click", () => showSlide(current - 1));
next.addEventListener("click", () => showSlide(current + 1));
viewer.addEventListener("keydown", event => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  showSlide(current + (event.key === "ArrowRight" ? 1 : -1));
});

render();
