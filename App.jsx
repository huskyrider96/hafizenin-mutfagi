import React from "react";

const INGREDIENTS = {
  sebze: [
    "Soğan", "Domates", "Biber", "Patates", "Havuç", "Kabak", "Patlıcan", "Ispanak", "Karnabahar", "Brokoli", "Lahana", "Bezelye", "Fasulye", "Bamya", "Pırasa", "Mantar"
  ],
  bakliyat: ["Mercimek", "Nohut", "Fasulye", "Barbunya", "Bulgur", "Pirinç", "Makarna"],
  protein: ["Kıyma", "Tavuk", "Et", "Balık", "Yumurta", "Peynir", "Yoğurt"],
  temel: ["Salça", "Yağ", "Tereyağı", "Sarımsak", "Limon", "Süt", "Ekmek", "Sucuk"],
};

const RECIPES = [
  { name: "Mercimek Çorbası", category: "Çorba", mood: ["Hafif", "Sulu", "Hızlı"], needs: ["Mercimek", "Soğan", "Havuç"], text: "Klasik, yumuşak içimli ve hemen her sofraya uyan çorba." },
  { name: "Ezogelin Çorbası", category: "Çorba", mood: ["Sulu"], needs: ["Mercimek", "Soğan", "Salça", "Pirinç"], text: "Salçalı, yoğun ve akşam sofrasına çok yakışan çorba." },
  { name: "Yayla Çorbası", category: "Çorba", mood: ["Hafif", "Sulu"], needs: ["Yoğurt", "Pirinç", "Yumurta"], text: "Yoğurtlu, ferah ve ana yemeğin yanına çok uyumlu." },
  { name: "Domates Çorbası", category: "Çorba", mood: ["Hızlı", "Hafif"], needs: ["Domates", "Salça", "Tereyağı"], text: "Pratik ve sevilen klasik domates çorbası." },
  { name: "Sebze Çorbası", category: "Çorba", mood: ["Hafif", "Sulu"], needs: ["Patates", "Havuç", "Soğan"], text: "Evde ne varsa mantığıyla çıkan kurtarıcı çorba." },
  { name: "Tarhana Çorbası", category: "Çorba", mood: ["Sulu", "Hızlı"], needs: ["Salça", "Tereyağı"], text: "Kısa sürede çıkan sıcacık anne çorbası." },

  { name: "Nohut Yemeği", category: "Bakliyat", mood: ["Sulu", "Doyurucu"], needs: ["Nohut", "Soğan", "Salça"], text: "Yanına pilavı çağıran güçlü klasik." },
  { name: "Kuru Fasulye", category: "Bakliyat", mood: ["Sulu", "Doyurucu"], needs: ["Fasulye", "Soğan", "Salça"], text: "Türk mutfağının ağır topu." },
  { name: "Etli Nohut", category: "Bakliyat", mood: ["Doyurucu", "Sulu"], needs: ["Nohut", "Et", "Soğan"], text: "Bakliyata et desteği veren kuvvetli tencere yemeği." },
  { name: "Yeşil Mercimek Yemeği", category: "Bakliyat", mood: ["Sulu", "Hafif"], needs: ["Mercimek", "Soğan", "Salça"], text: "Pratik ve tok tutan bakliyat seçeneği." },
  { name: "Barbunya", category: "Bakliyat", mood: ["Hafif", "Sulu"], needs: ["Barbunya", "Soğan", "Domates"], text: "Zeytinyağlı çizgide ferah bir seçenek." },
  { name: "Mercimek Köftesi", category: "Bakliyat", mood: ["Hafif", "Hızlı"], needs: ["Mercimek", "Bulgur", "Soğan"], text: "Öğlen ve çay saati için çok iyi gider." },

  { name: "Kıymalı Kabak", category: "Sebze", mood: ["Sulu", "Doyurucu"], needs: ["Kabak", "Kıyma", "Soğan", "Domates"], text: "Hafif sebzeyi kıymayla toparlayan klasik." },
  { name: "Patlıcan Musakka", category: "Sebze", mood: ["Doyurucu"], needs: ["Patlıcan", "Kıyma", "Domates"], text: "Pilavın yanına çok iyi giden ana yemek." },
  { name: "Karnıyarık", category: "Sebze", mood: ["Doyurucu", "Fırın"], needs: ["Patlıcan", "Kıyma", "Soğan", "Domates"], text: "Alkış alan klasiklerden." },
  { name: "Taze Fasulye", category: "Sebze", mood: ["Sulu", "Hafif"], needs: ["Fasulye", "Soğan", "Domates"], text: "Yaz sofralarının vazgeçilmezlerinden." },
  { name: "Etli Taze Fasulye", category: "Sebze", mood: ["Sulu", "Doyurucu"], needs: ["Fasulye", "Et", "Soğan", "Domates"], text: "Sebzeye daha tok bir yorum." },
  { name: "Bezelye Yemeği", category: "Sebze", mood: ["Sulu"], needs: ["Bezelye", "Patates", "Havuç", "Soğan"], text: "Renkli ve sevmesi kolay bir tencere yemeği." },
  { name: "Etli Bezelye", category: "Sebze", mood: ["Sulu", "Doyurucu"], needs: ["Bezelye", "Et", "Patates", "Soğan"], text: "Sebze ve eti aynı tabakta dengeler." },
  { name: "Ispanak Yemeği", category: "Sebze", mood: ["Hafif", "Sulu"], needs: ["Ispanak", "Soğan", "Yoğurt"], text: "Yoğurtla çok iyi anlaşan hafif yemek." },
  { name: "Kapuska", category: "Sebze", mood: ["Sulu", "Doyurucu"], needs: ["Lahana", "Kıyma", "Soğan", "Salça"], text: "Lahanayı ciddi bir akşam yemeğine çevirir." },
  { name: "Bamya Yemeği", category: "Sebze", mood: ["Sulu"], needs: ["Bamya", "Domates", "Soğan"], text: "Anadolu damarı taşıyan klasik tencere." },
  { name: "Etli Bamya", category: "Sebze", mood: ["Sulu", "Doyurucu"], needs: ["Bamya", "Et", "Domates", "Soğan"], text: "Bamyayı daha tok bir çizgiye taşır." },
  { name: "Etli Patates Yemeği", category: "Sebze", mood: ["Sulu", "Doyurucu"], needs: ["Patates", "Et", "Soğan", "Salça"], text: "Tam ev usulü akşam yemeği." },
  { name: "Patates Yemeği", category: "Sebze", mood: ["Sulu", "Hızlı"], needs: ["Patates", "Soğan", "Salça"], text: "Az malzemeyle çıkan samimi bir tencere." },

  { name: "Tavuk Sote", category: "Tavuk", mood: ["Hızlı", "Doyurucu"], needs: ["Tavuk", "Biber", "Soğan", "Domates"], text: "Pilavın yanına en çok yakışan tavuk işi." },
  { name: "Fırında Tavuk Patates", category: "Tavuk", mood: ["Fırın", "Doyurucu"], needs: ["Tavuk", "Patates", "Biber"], text: "Tek tepside çözüm, az bulaşık çok huzur." },
  { name: "Tavuk Haşlama", category: "Tavuk", mood: ["Hafif", "Sulu"], needs: ["Tavuk", "Havuç", "Patates", "Soğan"], text: "Daha hafif akşamlar için güzel seçenek." },
  { name: "Yoğurtlu Tavuk", category: "Tavuk", mood: ["Fırın", "Hafif"], needs: ["Tavuk", "Yoğurt", "Sarımsak"], text: "Yoğurtla yumuşayan lezzetli tavuk yemeği." },
  { name: "Mantarlı Tavuk", category: "Tavuk", mood: ["Hızlı"], needs: ["Tavuk", "Mantar", "Soğan"], text: "Biraz daha şehirli ama evde rahat çıkan tarif." },
  { name: "Tavuklu Pilav", category: "Tavuk", mood: ["Doyurucu"], needs: ["Tavuk", "Pirinç", "Tereyağı"], text: "Tek tabakta güçlü doyuruculuk." },

  { name: "Et Sote", category: "Et", mood: ["Doyurucu", "Hızlı"], needs: ["Et", "Biber", "Soğan", "Domates"], text: "Pilavı görünce hemen yanına oturan et yemeği." },
  { name: "Tas Kebabı", category: "Et", mood: ["Sulu", "Doyurucu"], needs: ["Et", "Soğan", "Domates"], text: "Ağır ama çok sevilen klasik akşam yemeği." },
  { name: "Kuşbaşı Etli Türlü", category: "Et", mood: ["Sulu", "Doyurucu"], needs: ["Et", "Patates", "Kabak", "Patlıcan"], text: "Sebze bolken çok mantıklı bir ana yemek." },
  { name: "Et Haşlama", category: "Et", mood: ["Sulu", "Hafif"], needs: ["Et", "Patates", "Havuç", "Soğan"], text: "Sade ve şifalı tencere klasiği." },
  { name: "Güveç", category: "Et", mood: ["Fırın", "Doyurucu"], needs: ["Et", "Patates", "Biber", "Domates"], text: "Fırında ağır ağır pişen aile yemeği." },
  { name: "Yahni", category: "Et", mood: ["Sulu", "Doyurucu"], needs: ["Et", "Soğan", "Domates"], text: "Kaşık işi sevenlere çok iyi gider." },
  { name: "Rosto", category: "Et", mood: ["Fırın", "Doyurucu"], needs: ["Et", "Patates", "Havuç"], text: "Biraz daha özel sofralara yakışır." },
  { name: "Sulu Köfte", category: "Et", mood: ["Sulu", "Doyurucu"], needs: ["Kıyma", "Patates", "Soğan", "Pirinç"], text: "Çorba ile ana yemek arası şahane bir ev tenceresi." },
  { name: "İzmir Köfte", category: "Et", mood: ["Fırın", "Doyurucu"], needs: ["Kıyma", "Patates", "Domates", "Biber"], text: "Aile sofrasında güvenli klasiklerden." },
  { name: "Köfte Patates", category: "Et", mood: ["Doyurucu"], needs: ["Kıyma", "Patates", "Soğan"], text: "En risksiz akşam menülerinden biri." },

  { name: "Fırında Balık", category: "Balık", mood: ["Fırın", "Hafif"], needs: ["Balık", "Patates", "Limon"], text: "Temiz ve dengeli bir akşam seçeneği." },
  { name: "Balık Buğulama", category: "Balık", mood: ["Sulu", "Hafif"], needs: ["Balık", "Domates", "Soğan"], text: "Daha yumuşak, daha sulu bir balık akşamı." },
  { name: "Tava Balık", category: "Balık", mood: ["Hızlı"], needs: ["Balık", "Yağ"], text: "En sade balık akşamı." },

  { name: "Pirinç Pilavı", category: "Yan", mood: ["Hızlı"], needs: ["Pirinç", "Tereyağı"], text: "Neredeyse her ana yemeğin sessiz ortağı." },
  { name: "Bulgur Pilavı", category: "Yan", mood: ["Hızlı"], needs: ["Bulgur", "Soğan", "Domates"], text: "Sulu yemeklerin yanına cuk oturur." },
  { name: "Şehriyeli Pilav", category: "Yan", mood: ["Hızlı"], needs: ["Pirinç", "Tereyağı"], text: "Daha klasik pilav hissi verir." },
  { name: "Makarna", category: "Yan", mood: ["Hızlı"], needs: ["Makarna", "Tereyağı"], text: "Hızlı kurtarıcı yan tabak." },
  { name: "Cacık", category: "Yan", mood: ["Hafif", "Hızlı"], needs: ["Yoğurt", "Salatalık"], text: "Sofraya ferahlık veren soğuk eşlikçi." },
  { name: "Salata", category: "Yan", mood: ["Hafif", "Hızlı"], needs: ["Domates", "Limon"], text: "Hemen her tabağa uyum sağlar." },
  { name: "Patates Püresi", category: "Yan", mood: ["Doyurucu"], needs: ["Patates", "Tereyağı", "Süt"], text: "Köfte ve tavukla çok iyi anlaşır." },

  { name: "Menemen", category: "Kahvaltı", mood: ["Hızlı"], needs: ["Domates", "Biber", "Yumurta"], text: "Kahvaltının neşeli yıldızı." },
  { name: "Peynirli Omlet", category: "Kahvaltı", mood: ["Hızlı", "Hafif"], needs: ["Yumurta", "Peynir"], text: "Temiz, hızlı ve risksiz kahvaltı hamlesi." },
  { name: "Patatesli Yumurta", category: "Kahvaltı", mood: ["Doyurucu", "Hızlı"], needs: ["Patates", "Yumurta", "Soğan"], text: "Kahvaltıda da akşamda da çalışır." },
  { name: "Sucuklu Yumurta", category: "Kahvaltı", mood: ["Doyurucu"], needs: ["Yumurta", "Sucuk"], text: "Pazar sabahının neşesi." },
  { name: "Yumurtalı Ekmek", category: "Kahvaltı", mood: ["Hızlı"], needs: ["Yumurta", "Ekmek"], text: "Bayat ekmeği yıldızlaştırır." },

  { name: "Fırında Makarna", category: "Fırın", mood: ["Fırın", "Doyurucu"], needs: ["Makarna", "Peynir", "Yumurta"], text: "Ana yemek kadar tok tutan fırın işi." },
  { name: "Tepsi Köfte", category: "Fırın", mood: ["Fırın", "Doyurucu"], needs: ["Kıyma", "Patates", "Biber"], text: "Ailece sevilen klasik tepsi yemeği." },
  { name: "Fırında Sebze", category: "Fırın", mood: ["Fırın", "Hafif"], needs: ["Patates", "Kabak", "Havuç"], text: "Sebzeleri tek tepside toplayan rahat çözüm." },
  { name: "Patates Graten", category: "Fırın", mood: ["Fırın", "Doyurucu"], needs: ["Patates", "Peynir", "Süt"], text: "Yan yemek gibi durur, ana yemeğe yürür." },

  { name: "Ton Balıklı Salata", category: "Hafif", mood: ["Hafif", "Hızlı"], needs: ["Balık", "Domates", "Limon"], text: "Öğlen için hafif ama tok seçenek." },
  { name: "Yoğurtlu Kabak Mezesi", category: "Hafif", mood: ["Hafif"], needs: ["Kabak", "Yoğurt", "Sarımsak"], text: "Yan tabakta ferah ve rahat oyuncu." },
  { name: "Sebzeli Omlet Tabak", category: "Hafif", mood: ["Hafif", "Hızlı"], needs: ["Yumurta", "Biber", "Domates"], text: "Kahvaltı ile öğlen arası pratik tabak." },
  { name: "Haşlanmış Sebze Tabağı", category: "Hafif", mood: ["Hafif"], needs: ["Brokoli", "Havuç", "Patates"], text: "Sade, temiz ve dengeli seçenek." }
];

const FILTERS = ["Tümü", "Çorba", "Bakliyat", "Sebze", "Tavuk", "Et", "Balık", "Yan", "Kahvaltı", "Fırın", "Hafif"];
const MOODS = ["Hepsi", "Hafif", "Doyurucu", "Sulu", "Hızlı", "Fırın"];

function scoreRecipe(recipe, selected) {
  const matched = recipe.needs.filter((n) => selected.includes(n));
  const missing = recipe.needs.filter((n) => !selected.includes(n));
  const exactBonus = matched.length === recipe.needs.length ? 8 : 0;
  const efficiencyBonus = recipe.needs.length ? (matched.length / recipe.needs.length) * 4 : 0;
  const score = matched.length * 10 - missing.length * 2 + exactBonus + efficiencyBonus;
  return { ...recipe, matchedCount: matched.length, missing, score };
}

const sectionStyle = {
  border: '1px solid #fed7aa',
  background: 'rgba(255,255,255,0.95)',
  padding: 20,
  borderRadius: 24,
  boxShadow: '0 10px 25px rgba(0,0,0,0.06)'
};

const chipBase = {
  border: '1px solid #d6d3d1',
  background: '#fff',
  borderRadius: 999,
  padding: '10px 14px',
  cursor: 'pointer'
};

const primaryBtn = (bg = '#f97316') => ({
  background: bg,
  color: '#fff',
  border: 'none',
  borderRadius: 18,
  padding: '12px 16px',
  fontWeight: 700,
  cursor: 'pointer'
});

export default function App() {
  const [selected, setSelected] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState('Tümü');
  const [mood, setMood] = React.useState('Hepsi');
  const [homeOnly, setHomeOnly] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);
  const [showFavorites, setShowFavorites] = React.useState(false);
  const [dailyIdeas, setDailyIdeas] = React.useState([]);
  const [menuIdeas, setMenuIdeas] = React.useState([]);

  const toggleIngredient = (item) => {
    setSelected((prev) => prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]);
  };

  const addFromInput = () => {
    const items = query
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean)
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    setSelected((prev) => Array.from(new Set([...prev, ...items])));
    setQuery('');
  };

  const toggleFavorite = (name) => {
    setFavorites((prev) => prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]);
  };

  const filteredPool = RECIPES
    .map((recipe) => scoreRecipe(recipe, selected))
    .filter((r) => (activeFilter === 'Tümü' ? true : r.category === activeFilter))
    .filter((r) => (mood === 'Hepsi' ? true : r.mood.includes(mood)))
    .filter((r) => (homeOnly ? r.missing.length === 0 : true));

  const scoredRecipes = filteredPool
    .filter((r) => selected.length === 0 ? true : r.matchedCount > 0)
    .sort((a, b) => b.score - a.score || b.matchedCount - a.matchedCount)
    .slice(0, 30);

  const favoriteRecipes = RECIPES.filter((r) => favorites.includes(r.name));

  const suggestToday = () => {
    const pool = filteredPool.length ? filteredPool : RECIPES.map((r) => scoreRecipe(r, selected));
    const ideas = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
    setDailyIdeas(ideas);
  };

  const suggestMenu = () => {
    const soups = RECIPES.filter((r) => r.category === 'Çorba');
    const mains = RECIPES.filter((r) => ['Et', 'Tavuk', 'Balık', 'Sebze', 'Bakliyat', 'Fırın'].includes(r.category));
    const sides = RECIPES.filter((r) => r.category === 'Yan');
    const menus = Array.from({ length: 3 }).map(() => ({
      soup: soups[Math.floor(Math.random() * soups.length)],
      main: mains[Math.floor(Math.random() * mains.length)],
      side: sides[Math.floor(Math.random() * sides.length)],
    }));
    setMenuIdeas(menus);
  };

  return (
    <div style={{ minHeight: '100vh', padding: 16, color: '#292524' }}>
      <div style={{ maxWidth: 460, margin: '0 auto', display: 'grid', gap: 16 }}>
        <div style={sectionStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 28 }}>Hafize'nin Mutfağı</h1>
              <p style={{ margin: '8px 0 0', color: '#57534e', lineHeight: 1.4 }}>Hafize Hanım, bugün ne döktürüyoruz? Dolabı söyle, fikri ben vereyim.</p>
            </div>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ffedd5', display: 'grid', placeItems: 'center', fontSize: 28 }}>🍲</div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 }}>
            <button onClick={suggestToday} style={primaryBtn('#f97316')}>Bugün Ne Yapsam?</button>
            <button onClick={suggestMenu} style={primaryBtn('#292524')}>Bugün Sofrada Ne Olsun?</button>
            <button onClick={() => setShowFavorites(!showFavorites)} style={primaryBtn('#ec4899')}>{showFavorites ? 'Tariflere Dön' : 'Favorilerim'}</button>
            <button onClick={() => setHomeOnly(!homeOnly)} style={primaryBtn('#16a34a')}>{homeOnly ? 'Tüm Tarifler' : 'Markete Gitmeden Ne Çıkar?'}</button>
          </div>
        </div>

        {menuIdeas.length > 0 && (
          <div style={{ ...sectionStyle, borderColor: '#d6d3d1', background: '#fafaf9' }}>
            <h2 style={{ marginTop: 0 }}>Bugün sofra böyle kurulabilir</h2>
            <div style={{ display: 'grid', gap: 8 }}>
              {menuIdeas.map((m, i) => (
                <div key={i} style={{ border: '1px solid #e7e5e4', background: '#fff', borderRadius: 16, padding: 12 }}>
                  Menü {i + 1}: {m.soup.name} + {m.main.name} + {m.side.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {dailyIdeas.length > 0 && (
          <div style={{ ...sectionStyle, background: '#fff7ed' }}>
            <h2 style={{ marginTop: 0 }}>Bugün sana bunlar göz kırpıyor</h2>
            <div style={{ display: 'grid', gap: 8 }}>
              {dailyIdeas.map((idea) => (
                <div key={idea.name} style={{ border: '1px solid #fed7aa', background: '#fff', borderRadius: 16, padding: 12 }}>
                  {idea.name}
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={sectionStyle}>
          <h2 style={{ marginTop: 0 }}>Evde ne varsa söyle bakalım</h2>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ör: havuç, kabak, tavuk"
              style={{ flex: 1, borderRadius: 16, border: '1px solid #d6d3d1', padding: '12px 14px' }}
            />
            <button onClick={addFromInput} style={primaryBtn('#f97316')}>Ekle</button>
          </div>
        </div>

        {Object.entries(INGREDIENTS).map(([group, items]) => (
          <div key={group} style={sectionStyle}>
            <h2 style={{ marginTop: 0, textTransform: 'capitalize' }}>{group}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {items.map((item) => {
                const active = selected.includes(item);
                return (
                  <button
                    key={item}
                    onClick={() => toggleIngredient(item)}
                    style={{ ...chipBase, borderColor: active ? '#f97316' : '#d6d3d1', background: active ? '#f97316' : '#fff', color: active ? '#fff' : '#292524' }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div style={sectionStyle}>
          <h2 style={{ marginTop: 0 }}>Seçilenler</h2>
          {selected.length === 0 ? (
            <p style={{ color: '#78716c', margin: 0 }}>Henüz malzeme gelmedi. Dolap sessiz, tencere umutlu.</p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {selected.map((item) => (
                <span key={item} style={{ borderRadius: 999, background: '#f5f5f4', padding: '10px 14px', fontSize: 14 }}>{item}</span>
              ))}
            </div>
          )}
        </div>

        <div style={sectionStyle}>
          <h2 style={{ marginTop: 0 }}>Ne moddayız bugün?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{ ...chipBase, background: activeFilter === f ? '#f97316' : '#fff', color: activeFilter === f ? '#fff' : '#292524', borderColor: activeFilter === f ? '#f97316' : '#d6d3d1' }}>
                {f}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
            {MOODS.map((m) => (
              <button key={m} onClick={() => setMood(m)} style={{ ...chipBase, background: mood === m ? '#ec4899' : '#fff', color: mood === m ? '#fff' : '#292524', borderColor: mood === m ? '#ec4899' : '#d6d3d1' }}>
                {m}
              </button>
            ))}
          </div>
          <h2 style={{ marginTop: 0 }}>Sana yakışır öneriler</h2>

          {showFavorites ? (
            favoriteRecipes.length === 0 ? (
              <p style={{ color: '#78716c', margin: 0 }}>Henüz favori yok. Kalpleri çalıştırabiliriz.</p>
            ) : (
              <div style={{ display: 'grid', gap: 12 }}>
                {favoriteRecipes.map((recipe) => (
                  <div key={recipe.name} style={{ border: '1px solid #e7e5e4', borderRadius: 16, padding: 16 }}>
                    <h3 style={{ margin: 0 }}>{recipe.name}</h3>
                    <p style={{ margin: '8px 0 0', color: '#57534e' }}>{recipe.text}</p>
                  </div>
                ))}
              </div>
            )
          ) : scoredRecipes.length === 0 ? (
            <p style={{ color: '#78716c', margin: 0 }}>Malzeme seçince veya filtre kullanınca öneriler burada görünür.</p>
          ) : (
            <div style={{ display: 'grid', gap: 12 }}>
              {scoredRecipes.map((recipe) => (
                <div key={recipe.name} style={{ border: '1px solid #e7e5e4', borderRadius: 16, padding: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <h3 style={{ margin: 0 }}>{recipe.name}</h3>
                      <button onClick={() => toggleFavorite(recipe.name)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 18 }}>
                        {favorites.includes(recipe.name) ? '❤️' : '🤍'}
                      </button>
                    </div>
                    <span style={{ borderRadius: 999, background: '#f5f5f4', padding: '6px 10px', fontSize: 12 }}>Puan: {Math.round(recipe.score)} | {recipe.category}</span>
                  </div>
                  <p style={{ margin: '8px 0 0', color: '#57534e' }}>{recipe.text}</p>
                  {recipe.missing.length > 0 && (
                    <p style={{ margin: '8px 0 0', color: '#78716c', fontSize: 13 }}>Markete lazım olanlar: {recipe.missing.join(', ')}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
