<script>
const translations = {
  ar: {
    hub_title: "الشركة القُطب",
    hub_desc: "نحوّل الأفكار إلى مشاريع حقيقية",
    maxbytes: "MaxBytes",
    hvac: "تركيب وصيانة مكيفات",
    gifty: "Gifty Story",
    slogan: "Where every gift tells a story"
  },
  en: {
    hub_title: "Creative Hub",
    hub_desc: "We turn ideas into real projects",
    maxbytes: "MaxBytes",
    hvac: "HVAC Services",
    gifty: "Gifty Story",
    slogan: "Where every gift tells a story"
  }
};

function setLanguage(lang) {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      el.innerText = translations[lang][key];
    });

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.remove("fade-out");
  }, 300);
}
</script>
