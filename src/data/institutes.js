export const INSTITUTES = {
    "ing_teh_i": { title: "Инженерно-технологический институт" },
    "i_est": { title: "Институт естествознания" },
    "i_ist": { title: "Институт истории и права" },
    "i_ling": { title: "Институт лингвистики и мировых языков" },
    "i_ped": { title: "Институт педагогики" },
    "i_psih": { title: "Институт психологии" },
    "i_isk": { title: "Институт искусств и социокультурного проектирования" },
    "i_fil": { title: "Институт филологии и массмедиа" },
    "med_i": { title: "Медицинский институт" }
  };

const DATA = Object.keys(INSTITUTES).map((key)=>{
  return {
    titles: INSTITUTES[key].title,
    items: INSTITUTES[key].groups,
  }
});
