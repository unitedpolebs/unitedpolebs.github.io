<script>
const translations = {
  en: {
    hub_title: "Creative Hub",
    hub_desc: "We turn ideas into real projects",
    maxbytes: "MaxBytes",
    hvac: "HVAC Services",
    gifty: "Gifty Story",
    slogan: "Where every gift tells a story"
  },
  ar: {
    hub_title: "الشركة القُطب",
    hub_desc: "نحوّل الأفكار إلى مشاريع حقيقية",
    maxbytes: "ماكس بايتس",
    hvac: "تركيب وصيانة مكيفات",
    gifty: "جيفتي ستوري",
    slogan: "حيث كل هدية تحكي قصة"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.innerText = translations[lang][key];
  });
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}
</script>
