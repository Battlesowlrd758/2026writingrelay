(function () {
  // ---------------------------------------------------------------
  // CUSTOMIZE HERE
  // ---------------------------------------------------------------
  const TOTAL_STAMPS = 13;
  const STAMP_CODES = [
    `=*];ANm8W"<49BH0:D5wZX[r6`,
    "Ar(fGBn4*0GsmD%QKZ81_Fm2.",
    "29Pml6WTy6@O[T(Qo7e7<a,W<",
    "sTk#NmeD7@.CDc6A'u06pnk-i",
    "dUzTRnFw8A96mHyyaKdcSygrS",
    "Z@F~P4JHDJTV]).0@lru-nG-v",
    "RKs_%lZF;$NY~72nvt-gsmlUF",
    "^Gu0C(pB_ImY#~o!x0Wce{hBM",
    "be,ruvp%UcrYxTKF7RHauFPzr",
    "yc3!jFzg,qIJE$~%urCHt@[p4",
    "7=$gS'--pDaEu63cYjakHv0ev",
    "(Y+%unD5hCnZ7E3bpzRF7rvy4",
    "gY2%0OMdUziiveA5zlRu0drpy"
  ];

  // One story fragment per stamp, revealed in order as stamps are collected.
  // Rewrite these with your own story — keep the array length equal to TOTAL_STAMPS.
  const STORY = [
    "The well wasn't there yesterday, but it's here now. No big deal, right? It's just a new well. Normally, I'd agree with you. But who digs a well in the middle of the woods? And why does it look like some well made in the sixteenth century, rough rocks the size of bricks making a circle, moss growing on the stones as if they've grown there since dinosaurs walked the Earth? Do I even really want these questions answered? I've walked these woods by my house for years and have never seen a well here. Or anywhere in the woods. Sometimes I see old foundations of houses grown over with weeds and trees. There is even a collapsed cellar from about two hundred years ago, a perfect place to duck into during a game of hide and seek. On my thirteenth birthday last year, I even discovered an old cobblestone road hidden under twenty centimeters of dirt. But this clearing in the woods never had a well, and a well doesn't just appear like this suddenly.\n\nAt first I wanted to look in the well. I got close to the edge but chickened out. I'm not sure why. A cold feeling came over me, and I couldn't push myself to get near the edge and peek down. Maybe it was just the strangeness of it all.\n\nMy next idea was to ask my dad.",
    "As I was healing back, I saw some more things that probably weren't there at first, red mushrooms and some red flowers that I couldn't tell the name of, no big deal probably. Making my way back to the house, the red flowers were still around the forest, maybe with some white ones. I made it back home but I surprisingly didn't see any squirrels like I usually do, that was strange. I opened the door to my house to ask my dad about it.",
    "I went upstairs beneath the silence to my room. Cozy as always, though today it wasn't. Strange, wasn't it? Maybe my senses faded out and I'm a rock now. I sat on my bed and glanced at different parts of my room. A foot away from me, the stack of paper I kept on top of my desk fell onto the floor, yet no window was open whatsoever for wind to come in.\n\nI picked it up, and placed it next to me, when I caught a glimpse of an old letter sitting right in the middle of the desk in the corner of my eye. It was rigid, but felt like a letter given from the medieval ages. In it said;\n\nDesolate it may be, it thrived with life.\n\nAt least that was once in the timeline.\n\nAn old book fell downstairs, and now vines cover it.\n\nMaybe even moss.\n\nIt had a tale.\n\nDeciphering it required knowledge.\n\nBut even then, after stacks of paperwork and bookshelves,\n\nIt wasn't close to enough.\n\nA sigil may open that door,\n\nBut will never unlock the Stratum.\n\nThe Arbiter once must hold that secret within, for years,\n\nBut a Paragon will hold it forever.\n\nI read it over and over, until the words didn't make sense to me anymore, sort of like jamais vu. In the letter, I also found a key. The moment I held it, zephyr around me gushed and the door on the closet opened wistfully.\n\nBehind it, a dim light of wisp-glow shone right at me, so bright but so dim. Strange, I thought. I have to ask my father about it.",
    "I stepped closer to the closet, but stopped just short before I could reach. The lights coming from inside flickered, almost like a candle trying to decide whether it wanted to stay lit or not.\n\nI had no idea what that wisp of glow was, or why a key I had never seen opened my closet by itself. I really wanted to shut the door and go under the bed like nothing ever happened,but the curiosity inside me got the better of me. WIth a mixed feeling of anxiety, nervous, and curiosity I reached my hand towards the opening. I felt something that I felt before. It was the same cold feeling from the well in the woods. Whatever was inside this closet, I had a feeling it wasn't something that had been in there yesterday. I took one more tiny step towards it and peeked inside. There were no clothes, boxes, hangers, or the old junk like there was from my 6th birthday. Instead, there was a narrow stone staircase leading downwards, which I couldn't see until the end. I froze for a while, wondering how that possibly could be there. Then from the bottom of the staircase, I heard something quiet. It sounded like something scraping against the stone. The sound got bigger, closer. I instinctively shut the closet. Maybe asking about the well could wait. Maybe I should ask him about the closet first.",
    "I was wondering. Why is this even happening? This is too weird. The mysterious yelling from the fridge was still making my heart pound hard.\n\nI started to look for something inside the house. I was looking in the bookshelf. There was nothing. What even where throws keywords? This is just making the mystery deeper and deeper. That was when I heard a knock on the door. “Who’s there?” I said. I have never expected a visitor. “I have mail” I went to the door and saw the mail man. He opened his mouth. “You seem very tired. Are you ok?” “No, I'm not ok. I am in a mystery that I can’t solve. Can you help me?” “I am not good at solving mysteries myself… however, I can tell you who might be able to help. His name is Arthynie. He lives in the woods. He is a very wise old man that solved many mysteries before. You should see him” After he left, I was in shock. The mail he gave, the mail was the address that does not exist. “Forest hotel” what is this please?？",
    "I went back into my room and studied the mail. I opened the envelope and read the message.\n\n“Dear Mr. Arthynie,\n\nPlease meet at 22:00 at the graveyard we always go to.\n\nSincerely, JR.”\n\nWait, what. The mail man mentioned something about this, Artynie, and the letter he gave me was directed to him and it was from this guy JR. Why at 22:00 and what graveyard? A chill went up my spine. This reminded me of those horror movies where people meet at graveyards at night and then these creatures come out of the ground and start chasing the characters. I hate horror movies. After this awful thought, I came back to my senses and started to hear the fridge yelling at me. The sound was overwhelming so I decided to go outside. That was the worst decision I could’ve possibly made.",
    "Waiting for me in the middle of the street in front of my house, under the amber glow of the street light, was a woodland creature. It was not of the fuzzy adorable variety however. I knew it came from the nearby forest because in its dusty patches of fur was the same yellow flower that grew along the main hiking trail.\n\nEvery Sunday, my dad and I loved to take walks along that path while we chatted about our hopes for the week. He usually had his fingers crossed for more days of croissants.\n\nOur normal routine was to walk for just fifteen minutes and then go back home, so we never did make it too far in the forest itself. It was barren, aside from its tall inhabitants. The only man-made structure that I recall seeing was a dilapidated shack that, unfortunately, had trash in it that we cleared out each time we visited.\n\nLast Sunday, my mom and our dog joined us for our walk along that trail. I remember making sporadic remarks to one another about hearing faint whispers. However, we never heard them at quite the same time. Even our dog’s ears would perk up suddenly and randomly when the air was as silent as a library.\n\nWere the whispers in our minds? Were they from my family playing tricks? Were they the vibrations of the universe?\n\nWhat I can answer is that I vividly remember two of the wispy whispers that I heard: “Don’t” followed by “open.”\n\nAt the time, when I asked my dad if he had just heard those words too, his response was, “No, but I’m guessing if there are any doors at the graveyard that I just heard a whisper say, then we should leave them sealed shut.”\n\nThat patchy little creature stood there in the street menacingly and meaningfully. Its eyes were locked on the letter in my hand as if the paper was its next meal. It slightly parted its lips and I suddenly heard a familiar whisper.",
    "The thing, whatever it was. I felt as it was speaking directly into my skull. “I need blood.” I declined obviously, I am not giving some woodland creature my blood. I asked why, and it told me, “Experiences, to… live.” I had some tapes and pictures in my house. They were of my experiences and plain movies. Together, we observed, and through this, I felt like it was a true friend. But nothing ever lasts, as when I blinked. It was gone, replaced by a message. “Its open, you need to close it. For all of us.” Could’ve actually just told me instead of some cryptic message. I felt somewhat cross as this is just what happens in horror movies, I think. I’m usually too scared to concentrate on details. I hate horror movies, I feel like I’m in one right this moment. I went to the graveyard and found a door sitting there out in the open. I opened it, and saw almost endless stone corridors. I decided to go in.",
    "The graveyard was unpleasant to say the least. Beyond its rusty, gold encrusted gates that have clearly seen better days, is a vast plain of head stones decorated with a layer of moss and depression. Nothing looked out of the ordinary, really. I mean, the graveyard always had an atmosphere of sorrow, regret, and sometimes a drizzle of gloominess.\n\nBut this time, it’s a bit different. I can feel that something’s not right.\n\nI can feel the unease wafting through the cold wind that pierces through my t-shirt. I can feel the discomfort soaking into me like the wet, overgrown ground soaking my socks making me fidget my toes. I can feel an unwelcome eeriness that covers this plain like a blanket, stealing the air from my lungs.\n\nI wish I could turn back, back to the warmth of my house that now makes me feel so desolate. My mom, who would always smell of freshly baked bread and a hint of honey, made our day with her smile so bright, it could easily make the sun shy away from shame, was missing. Our dog, Daisy, who could easily soothe our despondence with a simple lick and her adorable tail wag, went into the woods for her usual activities this morning and never came back. Dad too. He wasn’t there in our home when I came back from my walk.\n\nBut I can’t. I need to find Artynie or whoever it is, to help me find my family. So we can return to our normal lives again. So that when I step into our house my mom would hug me with her warm embrace. So that Daisy would wag her tail whilst jumping towards me, pawing her way through our embrace, and my dad smiling at us with a certain soft expression flashes across my mind.\n\nI let my feet carry me throughout the everlasting damp fields, as my eyes wander throughout the fields with a certain determination.\n\nAn old man. A wise old man…. Well, it’s clear that nobody would be walking around here at night.\n\nI sighed in defeat as I squatted down on the floor. It’s no use. I’ve walked around this graveyard forever. So much so that I can recall all the names inscribed on the headstones.\n\nMaybe I should head back for today. Maybe once I collect more clues and bring it with me next time, I can have a clearer vision of where I can start.\n\nI stood up from the ground and started heading back towards the gate, when suddenly the sound of a grandfather clock ringing in the distance echoed through the lonely yard.\n\nGoing once.\n\nNow that’s weird (As if anything I saw earlier was anything less). I walked around this plain for hours like that’s the only thing I can do, but I didn’t spot anything akin to a clock.\n\nGoing twice, thrice.\n\nMy brows furrowed as I began to jog through the graveyard in search of the source. Just where did it come from?\n\nGoing fourth, fifth, sixth.\n\nIt sounds like it’s coming from around the area where George Williams was buried—No, maybe around Stevens Johnson?\n\nGoing seventh, eighth, ninth.\n\n“Please! I’ll do whatever it takes! Just bring them back to me!”\n\n“Dad?”\n\nI felt my legs almost give out like jelly before Artynie caught my body. My body feels heavy as exhaustion suddenly takes over my body, binding it to the ground. I lift my head slowly as I take in the familiar silhouette in front of me.",
    "The eighth page was newer than the rest. Different ink. Someone was still writing this — right now, in the present tense.",
    "A line appeared: 'If you have gathered this far, you are not finding a story. You are being invited into one.'",
    "The tenth fragment gave no plot at all — only an address, and the words: 'Thursdays. Bring one page. Leave with another.'",
    "Two new pages were waiting beneath the address. They spoke of the people who kept the circle alive, each carrying a different kind of beginning.",
    "The circle's members had each left a page behind, not to be solved, but to be continued by whoever arrived next.",
    "The final fragment completed the seal. Underneath it, at last, a name: The Writing Circle. The door, it turns out, was never locked."
  ];

  // Add Japanese versions here later, in the same order as STORY.

  // Optional hint shown next to each LOCKED journal entry, to nudge people without
  // spoiling the story. Leave an entry as "" for no hint on that stamp.
  const HINTS = [
    "", "", "", "", "", "", "", "", "", "", "", "", ""
  ];

  // Rough location legend for the stamp map page (reached at ?map=1).
  // Leave entries as "" until you're ready to fill them in — the map page
  // already works with empty entries, it just shows "location coming soon".
  const STAMP_LOCATIONS = [
    "Class 2D (2nd Grade Interclass)",
    "Class 2D (2nd Grade Interclass)",
    "Class 2D (2nd Grade Interclass)",
    "Class 2D (2nd Grade Interclass)",
    "", "", "", "", "", "", "", "", ""
  ];

  // Once you have a map image, put the file in this folder and set its name here,
  // e.g. "map.png". Leave as "" to show a placeholder instead.
  const MAP_IMAGE_URL = "";

  // Replace these sample entries with the real teachers' introductions and stories.
  const TEACHER_STORIES = [
    { name: "Teacher One", nameJa: "先生＃１", intro: "A guide who helps each voice find its shape.", introJa: "一人ひとりの声が形になるように導く先生。", story: "Add this teacher's introduction and story here when you are ready." },
    { name: "Teacher Two", nameJa: "先生＃２", intro: "A patient reader who makes room for new ideas.", introJa: "新しいアイデアを受け止める、辛抱強い読者。", story: "Add this teacher's introduction and story here when you are ready." }
  ];

  // Replace these sample entries with the real members' introductions and stories.
  const MEMBER_STORIES = [
    { name: "Member One", nameJa: "メンバー＃１", intro: "A quiet observer who writes about beginnings.", introJa: "始まりについて書く、静かな観察者。", story: "I joined the circle because I wanted a place where unfinished ideas could be shared without apology." },
    { name: "Member Two", nameJa: "メンバー＃２", intro: "A collector of borrowed sentences and unexpected turns.", introJa: "借りた言葉と予想外の展開を集める人。", story: "My favorite part is leaving with a page that began in someone else's imagination and finding my own way into it." },
    { name: "Member Three", nameJa: "メンバー＃３", intro: "A steady believer in generous, shared writing.", introJa: "思いやりのある、分かち合う文章を信じる人。", story: "The circle reminds me that writing is both a solitary practice and a generous way of being with other people." },
    { name: "Member Four", nameJa: "メンバー＃４", intro: "A maker of small observations and long walks.", introJa: "小さな発見と長い散歩を大切にする人。", story: "Add this member's introduction and story here when you are ready." },
    { name: "Member Five", nameJa: "メンバー＃５", intro: "A poet drawn to the music of ordinary days.", introJa: "ありふれた日々の音に惹かれる詩人。", story: "Add this member's introduction and story here when you are ready." },
    { name: "Member Six", nameJa: "メンバー＃６", intro: "A storyteller who keeps a notebook close by.", introJa: "いつも近くにノートを置いている語り手。", story: "Add this member's introduction and story here when you are ready." },
    { name: "Member Seven", nameJa: "メンバー＃７", intro: "A thoughtful reader with a curious imagination.", introJa: "好奇心豊かな想像力を持つ、思慮深い読者。", story: "Add this member's introduction and story here when you are ready." },
    { name: "Member Eight", nameJa: "メンバー＃８", intro: "A writer exploring memory, place, and belonging.", introJa: "記憶や場所、居場所を探る書き手。", story: "Add this member's introduction and story here when you are ready." },
    { name: "Member Nine", nameJa: "メンバー＃９", intro: "A new voice finding confidence one page at a time.", introJa: "一ページずつ自信を見つけている新しい声。", story: "Add this member's introduction and story here when you are ready." },
    { name: "Member Ten", nameJa: "メンバー＃１０", intro: "A patient reviser who notices what others miss.", introJa: "他の人が見落とすものに気づく、辛抱強い推敲者。", story: "Add this member's introduction and story here when you are ready." },
    { name: "Member Eleven", nameJa: "メンバー＃１１", intro: "A generous collaborator with stories still unfolding.", introJa: "まだ続いていく物語を持つ、寛大な協力者。", story: "Add this member's introduction and story here when you are ready." }
  ];

  // ---------------------------------------------------------------
  const STORAGE_KEY = "inkTrailStamps_v1";
  const THEME_KEY = "inkTrailTheme_v1";
  const HOW_IT_WORKS_KEY = "inkTrailSeenHowItWorks_v1";
  const app = document.getElementById("app");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  function initialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function addThemeToggle() {
    const toggle = document.createElement("button");
    toggle.className = "theme-toggle no-print";
    toggle.type = "button";
    function updateLabel() {
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      toggle.textContent = dark ? "Light mode" : "Dark mode";
      toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    }
    updateLabel();
    toggle.addEventListener("click", function () {
      const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
      updateLabel();
    });
    app.appendChild(toggle);
  }

  function storyText(index) {
    return STORY[index];
  }
  function hintText(index) {
    return HINTS[index];
  }
  function locationText(index) {
    return STAMP_LOCATIONS[index];
  }
  const UI = {
    en: {
      rallyKicker: "A STORY TOLD IN STAMPS", title: "The Ink Trail", homeLead: "Scan each stamp as you find it. Every one you collect reveals another page of the story below.", about: "About the circle", collected: "stamps collected", journal: "Field journal", completeTitle: "The whole story is yours", completeLead: "All thirteen pages are found. What they were pointing to has a door of its own.", stepThrough: "Step through", keepLooking: "Keep looking", keepLookingLead: "Find the remaining QR stamps to complete the story and unlock what comes after it.", reset: "Reset progress", circleKicker: "THE WRITING CIRCLE", circleTitle: "A room for unfinished things", circleLead: "The Writing Circle is a small gathering for people who want to write, read, and make room for one another.", circleP1: "We bring one page to the table and leave with another. A paragraph can be polished, strange, funny, uncertain, or only half alive. It still belongs in the room.", circleP2: "The circle is built on attention rather than performance: listen closely, share generously, and let each person keep their own voice.", meetPeople: "MEET THE PEOPLE", chooseName: "Choose a name to open their story", teachers: "Teachers", members: "Members", backBook: "Back to stamp book", memberStory: "MEMBER STORY", teacherStory: "TEACHER STORY", printPdf: "Print or save as PDF", backPeople: "Back to people", collectedTitle: "collected!", alreadyTitle: "already in your book", alreadyNote: "You'd already found this one. No harm in visiting twice.", soFar: "stamps so far.", openBook: "Open my stamp book", adminKicker: "ADMIN HUB", adminTitle: "Manage the Ink Trail", testTitle: "Test or reset progress", adminNote: "These controls affect stamps saved in this browser only.", resetAll: "Reset all collected stamps", qrTitle: "Print your stamp QR codes", qrLead: "Each QR code below points to this page with a different stamp number. Print this page, cut the codes apart, and place one at each stamp location. Scanning a code collects that stamp for whoever scans it.", baseUrl: "Base URL:", print: "Print", adminHidden: "This admin view is only reachable with the encoded admin key in the address — it is not linked from the stamp book itself.", stamp: "STAMP", toReveal: "TO REVEAL", addStamp: "Add stamp", addedStamp: "Added stamp", resetConfirm: "Reset all collected stamps on this device?", howKicker: "HOW IT WORKS", howStep1: "Find a QR code hidden around the space — check the map for rough locations.", howStep2: "Scan it to collect that stamp and reveal one page of the story.", howStep3: "Collect all thirteen stamps to unlock the door to the Writing Circle.", howDismiss: "Got it — let's go", mapNav: "Stamp map", mapKicker: "FIND THE STAMPS", mapTitle: "Stamp map", mapLead: "Rough locations for all thirteen stamps. A full map is coming soon — for now, here's the list.", mapTbd: "Location coming soon", mapPlaceholder: "Map image coming soon", mapAlt: "Map showing stamp locations"
    },
    ja: {
      rallyKicker: "スタンプでつづる物語", title: "インク・トレイル", homeLead: "スタンプを見つけたらスキャンしてください。集めるたびに、下の物語のページが開きます。", about: "サークルについて", collected: "個のスタンプを集めました", journal: "フィールド・ジャーナル", completeTitle: "物語をすべて集めました", completeLead: "13ページすべてが見つかりました。物語が指していた先への扉が開きます。", stepThrough: "中へ進む", keepLooking: "まだ探し続けて", keepLookingLead: "残りのQRスタンプを見つけて、物語の続きを開きましょう。", reset: "進行状況をリセット", circleKicker: "ライティング・サークル", circleTitle: "未完成なもののための部屋", circleLead: "ライティング・サークルは、書き、読み、お互いのための場所をつくる小さな集まりです。", circleP1: "一枚のページを持ち寄り、別のページを持ち帰ります。磨かれた文章も、奇妙な文章も、まだ途中の文章も、この部屋に居場所があります。", circleP2: "このサークルで大切なのは、評価よりも向き合うこと。よく聴き、惜しみなく分かち合い、それぞれの声を大切にします。", meetPeople: "参加者", chooseName: "名前を選んで物語を読む", teachers: "先生", members: "メンバー", backBook: "スタンプ帳に戻る", memberStory: "メンバーの物語", teacherStory: "先生の物語", printPdf: "印刷またはPDFとして保存", backPeople: "参加者に戻る", collectedTitle: "を集めました！", alreadyTitle: "はすでに集めています", alreadyNote: "このスタンプはすでに見つけています。もう一度訪れても大丈夫です。", soFar: "個のスタンプを集めています。", openBook: "スタンプ帳を開く", adminKicker: "管理ハブ", adminTitle: "インク・トレイルを管理", testTitle: "進行状況をテストまたはリセット", adminNote: "これらの操作は、このブラウザーに保存された進行状況だけに作用します。", resetAll: "集めたスタンプをすべてリセット", qrTitle: "スタンプQRコードを印刷", qrLead: "下のQRコードは、それぞれ違うスタンプ番号のページにつながります。印刷して切り分け、各場所に置いてください。スキャンすると、そのスタンプが集まります。", baseUrl: "ベースURL:", print: "印刷", adminHidden: "この管理画面は、エンコードされた管理キーを使ったURLからのみ開けます。スタンプ帳からはリンクされていません。", stamp: "スタンプ", toReveal: "見つけるには", addStamp: "スタンプを追加", addedStamp: "追加済み", resetConfirm: "この端末の集めたスタンプをすべてリセットしますか？", howKicker: "遊び方", howStep1: "会場に隠されたQRコードを見つけましょう。おおよその場所は地図で確認できます。", howStep2: "スキャンしてスタンプを集めると、物語の1ページが開きます。", howStep3: "13個すべてのスタンプを集めると、ライティング・サークルへの扉が開きます。", howDismiss: "わかった、始めよう", mapNav: "スタンプマップ", mapKicker: "スタンプを探そう", mapTitle: "スタンプマップ", mapLead: "13個すべてのスタンプのおおよその場所です。詳しい地図は近日公開予定。今のところは一覧をご覧ください。", mapTbd: "場所は近日公開", mapPlaceholder: "地図画像は近日公開予定", mapAlt: "スタンプの場所を示す地図"
    }
  };
  UI.en.circleLead = "The Writing Circle is a group that meets every Friday to write fiction! Our authors write in various genres from romance to adventure and horror. Come see what we have been working on!";
  function ui(key) {
    return UI.en[key] || key;
  }

  applyTheme(initialTheme());
  UI.en.readOtherStories = "Read other stories";
  UI.en.otherStoriesTitle = "Read other stories";
  UI.en.otherStoriesLead = "Stories from the Writing Circle will be added here.";
  UI.en.backCircle = "Back to the circle";

  function loadStamps() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      let arr = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(arr)) arr = [];
      return arr;
    } catch (e) { return []; }
  }
  function saveStamps(arr) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); } catch (e) {}
  }
  function baseUrl() {
    return window.location.origin + window.location.pathname;
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }
  function storyHtml(s) {
    return escapeHtml(s).replace(/\r?\n/g, "<br>");
  }

  function initSecureAdmin() {
    const form = document.getElementById("adminLoginForm");
    const passwordInput = document.getElementById("adminPassword");
    const loginPanel = document.getElementById("loginPanel");
    const dashboard = document.getElementById("adminDashboard");
    const errorMessage = document.getElementById("loginError");

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      errorMessage.hidden = true;

      try {
        const response = await fetch("/api/admin-login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: passwordInput.value })
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Access Denied");

        loginPanel.style.display = "none";
        dashboard.style.display = "block";
        renderSecureAdminDashboard(result.adminData);
        passwordInput.value = "";
      } catch (error) {
        errorMessage.textContent = error.message === "Access Denied" ? "Access Denied" : "Unable to sign in. Try again.";
        errorMessage.hidden = false;
        passwordInput.select();
      }
    });
  }

  function renderSecureAdminDashboard(adminData) {
    const totalStamps = Number(adminData.totalStamps) || TOTAL_STAMPS;
    const storageKey = adminData.storageKey || "inkTrailStamps_v1";
    const baseInput = document.getElementById("baseInput");
    const grid = document.getElementById("qrGrid");
    const controls = document.getElementById("stampControls");
    baseInput.value = adminData.qrBaseUrl || (window.location.origin + "/");

    function defaultStampUrl(base, stampNumber) {
      const url = new URL(base, window.location.href);
      url.searchParams.set("s", STAMP_CODES[stampNumber - 1]);
      return url.toString();
    }

    function loadAdminStamps() {
      try {
        const raw = localStorage.getItem(storageKey);
        let stamps = raw ? JSON.parse(raw) : [];
        return Array.isArray(stamps) ? stamps : [];
      } catch (error) { return []; }
    }
    function saveAdminStamps(stamps) {
      try { localStorage.setItem(storageKey, JSON.stringify(stamps)); } catch (error) {}
    }
    function buildStampControls() {
      const stamps = loadAdminStamps();
      controls.innerHTML = "";
      for (let stampNumber = 1; stampNumber <= totalStamps; stampNumber++) {
        const button = document.createElement("button");
        button.className = "stamp-toggle" + (stamps[stampNumber - 1] ? " is-added" : "");
        button.type = "button";
        button.textContent = (stamps[stampNumber - 1] ? "Added stamp " : "Add stamp ") + String(stampNumber).padStart(2, "0");
        button.addEventListener("click", function () {
          const number = parseInt(this.textContent.match(/\d+$/)[0], 10);
          const current = loadAdminStamps();
          current[number - 1] = true;
          saveAdminStamps(current);
          this.textContent = "Added stamp " + String(number).padStart(2, "0");
          this.classList.add("is-added");
        });
        controls.appendChild(button);
      }
    }
    function buildCodes() {
      grid.innerHTML = "";
      const base = baseInput.value || (window.location.origin + "/");
      for (let stampNumber = 1; stampNumber <= totalStamps; stampNumber++) {
        const url = defaultStampUrl(base, stampNumber);
        const card = document.createElement("div");
        card.className = "qr-card";
        const target = document.createElement("div");
        target.className = "qr-target";
        const caption = document.createElement("div");
        caption.className = "cap";
        caption.textContent = "STAMP " + String(stampNumber).padStart(2, "0");
        card.appendChild(target);
        card.appendChild(caption);
        grid.appendChild(card);
        new QRCode(target, { text: url, width: 140, height: 140, colorDark: "#1F2A3C", colorLight: "#ffffff" });
      }
    }

    buildStampControls();
    buildCodes();
    baseInput.addEventListener("change", buildCodes);
    document.getElementById("printBtn").addEventListener("click", function () { window.print(); });
    document.getElementById("adminReset").addEventListener("click", function () {
      if (confirm("Reset all collected stamps on this device?")) {
        saveAdminStamps([]);
        buildStampControls();
      }
    });
  }

  if (document.body.classList.contains("admin-page")) {
    initSecureAdmin();
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const stampValue = params.get("s") || "";
  const stampParam = STAMP_CODES.indexOf(stampValue) + 1;
  const isLegacyAdminUrl = params.has("admin");

  if (isLegacyAdminUrl) {
    window.location.replace("admin.html");
  } else if (params.get("intro") === "1") {
    renderIntro();
  } else if (params.get("map") === "1") {
    renderMap();
  } else if (params.get("circle") === "1") {
    renderCircle();
  } else if (stampParam && stampParam >= 1 && stampParam <= TOTAL_STAMPS) {
    renderCollect(stampParam);
  } else {
    renderHome();
  }
  addThemeToggle();

  // ---------------- HOME ----------------
  function renderHome() {
    const stamps = loadStamps();
    const count = stamps.filter(Boolean).length;
    const complete = count >= TOTAL_STAMPS;

    const seenHowItWorks = localStorage.getItem(HOW_IT_WORKS_KEY) === "1";
    const howItWorksHtml = (count === 0 && !seenHowItWorks)
      ? '<div class="how-it-works">' +
          '<p class="kicker">' + ui("howKicker") + '</p>' +
          '<ol class="how-steps">' +
            '<li><span class="how-num">1</span><p>' + ui("howStep1") + '</p></li>' +
            '<li><span class="how-num">2</span><p>' + ui("howStep2") + '</p></li>' +
            '<li><span class="how-num">3</span><p>' + ui("howStep3") + '</p></li>' +
          '</ol>' +
          '<button class="btn secondary" id="dismissHow" type="button">' + ui("howDismiss") + '</button>' +
        '</div>'
      : '';

    let slotsHtml = "";
    const tilts = [-6, 4, -3, 7, -8, 2, -5, 6, -2, 5, -7];
    for (let i = 1; i <= TOTAL_STAMPS; i++) {
      const filled = !!stamps[i - 1];
      slotsHtml += '<div class="slot' + (filled ? " filled" : "") + '" style="--tilt:' + tilts[(i - 1) % tilts.length] + 'deg">' +
        (filled ? "✦" : i) + '</div>';
    }

    let entriesHtml = "";
    for (let j = 1; j <= TOTAL_STAMPS; j++) {
      const have = !!stamps[j - 1];
      const hint = hintText(j - 1);
      entriesHtml += '<div class="entry' + (have ? "" : " locked") + '">' +
        '<div class="num">' + String(j).padStart(2, "0") + '</div>' +
        '<p><span class="story-text">' + storyHtml(storyText(j - 1)) + '</span>' +
          (have ? "" : '<span class="locked-hint">' + ui("stamp") + ' ' + j + '<br>' + ui("toReveal") +
            (hint ? '<br><span class="locked-hint-detail">' + escapeHtml(hint) + '</span>' : '') + '</span>') +
        '</p>' +
        '</div>';
    }

    const unlockHtml = complete
      ? '<div class="unlock-box">' +
          '<div class="stamp-mark">SEAL<br>COMPLETE</div>' +
          '<h3>' + ui("completeTitle") + '</h3>' +
          '<p>' + ui("completeLead") + '</p>' +
          '<a class="btn" href="' + escapeHtml(baseUrl()) + '?circle=1">' + ui("stepThrough") + '</a>' +
        '</div>'
      : '<div class="unlock-box">' +
          '<div class="stamp-mark">' + count + ' / ' + TOTAL_STAMPS + '</div>' +
          '<h3>' + ui("keepLooking") + '</h3>' +
          '<p>' + ui("keepLookingLead") + '</p>' +
        '</div>';

    app.innerHTML =
      '<div class="wrap">' +
        '<div class="masthead">' +
          '<p class="kicker">' + ui("rallyKicker") + '</p>' +
          '<h1>' + ui("title") + '</h1>' +
          '<p>' + ui("homeLead") + '</p>' +
          '<nav class="page-nav"><a class="btn secondary" href="' + escapeHtml(baseUrl()) + '?intro=1">' + ui("about") + '</a><a class="btn secondary" href="' + escapeHtml(baseUrl()) + '?map=1">' + ui("mapNav") + '</a></nav>' +
        '</div>' +
        howItWorksHtml +
        '<div class="stamps-row">' + slotsHtml + '</div>' +
        '<p class="progress-caption"><strong>' + count + ' / ' + TOTAL_STAMPS + '</strong> ' + ui("collected") + '</p>' +
        '<div class="journal">' +
          '<h2>' + ui("journal") + '</h2>' +
          entriesHtml +
        '</div>' +
        unlockHtml +
      '</div>';

    const dismissHow = document.getElementById("dismissHow");
    if (dismissHow) {
      dismissHow.addEventListener("click", function () {
        localStorage.setItem(HOW_IT_WORKS_KEY, "1");
        renderHome();
      });
    }
  }

  // ---------------- INTRODUCTION ----------------
  function renderIntro() {
    app.innerHTML =
      '<div class="content-page">' +
        '<p class="kicker">' + ui("circleKicker") + '</p>' +
        '<h1>' + ui("circleTitle") + '</h1>' +
        '<p class="lead">' + ui("circleLead") + '</p>' +
        '<div class="prose">' +
          '<p>' + ui("circleP1") + '</p>' +
          '<p>' + ui("circleP2") + '</p>' +
          '<p>' + ui("homeLead") + '</p>' +
        '</div>' +
        '<div class="page-actions"><a class="btn" href="' + escapeHtml(baseUrl()) + '">' + ui("openBook") + '</a></div>' +
      '</div>';
  }

  // ---------------- STAMP MAP / LEGEND ----------------
  function renderMap() {
    let legendRows = "";
    for (let i = 1; i <= TOTAL_STAMPS; i++) {
      const loc = locationText(i - 1);
      legendRows += '<div class="map-row"><span class="map-num">' + String(i).padStart(2, "0") + '</span><span class="map-loc">' +
        (loc ? escapeHtml(loc) : '<em>' + ui("mapTbd") + '</em>') + '</span></div>';
    }
    const imageHtml = MAP_IMAGE_URL
      ? '<img class="map-image" src="' + escapeHtml(MAP_IMAGE_URL) + '" alt="' + escapeHtml(ui("mapAlt")) + '">'
      : "";

    app.innerHTML =
      '<div class="content-page map-page">' +
        '<p class="kicker">' + ui("mapKicker") + '</p>' +
        '<h1>' + ui("mapTitle") + '</h1>' +
        '<p class="lead">' + ui("mapLead") + '</p>' +
        imageHtml +
        '<div class="map-legend">' + legendRows + '</div>' +
        '<div class="page-actions"><a class="btn" href="' + escapeHtml(baseUrl()) + '">' + ui("openBook") + '</a></div>' +
      '</div>';
  }

  // ---------------- UNLOCKED WRITING CIRCLE ----------------
  function renderCircle() {
    const stamps = loadStamps();
    if (stamps.filter(Boolean).length < TOTAL_STAMPS) {
      renderHome();
      return;
    }

    if (params.get("stories") === "1") {
      renderOtherStories();
      return;
    }

    app.innerHTML =
      '<div class="content-page circle-page">' +
        '<p class="kicker">' + ui("circleKicker") + '</p>' +
        '<h1>' + ui("circleTitle") + '</h1>' +
        '<p class="lead">' + ui("circleLead") + '</p>' +
        '<div class="prose"><p>' + ui("circleP1") + '</p><p>' + ui("circleP2") + '</p></div>' +
        '<div class="page-actions"><a class="btn" href="' + escapeHtml(baseUrl()) + '?circle=1&stories=1">' + ui("readOtherStories") + '</a><a class="btn secondary" href="' + escapeHtml(baseUrl()) + '">' + ui("backBook") + '</a></div>' +
      '</div>';
  }

  function renderOtherStories() {
    app.innerHTML =
      '<div class="content-page circle-page">' +
        '<p class="kicker">' + ui("circleKicker") + '</p>' +
        '<h1>' + ui("otherStoriesTitle") + '</h1>' +
        '<p class="lead">' + ui("otherStoriesLead") + '</p>' +
        '<div class="page-actions"><a class="btn secondary" href="' + escapeHtml(baseUrl()) + '?circle=1">' + ui("backCircle") + '</a></div>' +
      '</div>';
  }

  // ---------------- COLLECT (from a scanned QR) ----------------
  function renderCollect(n) {
    const stamps = loadStamps();
    const alreadyHad = !!stamps[n - 1];
    stamps[n - 1] = true;
    saveStamps(stamps);

    const count = stamps.filter(Boolean).length;

    app.innerHTML =
      '<div class="collect-screen">' +
        '<div class="big-stamp"><span class="no">' + n + '</span><span class="label">COLLECTED</span></div>' +
        '<h1>' + ui("stamp") + " " + n + (alreadyHad ? " — " + ui("alreadyTitle") : " " + ui("collectedTitle")) + '</h1>' +
        '<p class="story-line">' + storyHtml(storyText(n - 1)) + '</p>' +
        (alreadyHad ? '<p class="already-note">' + ui("alreadyNote") + '</p>' : "") +
        '<p class="already-note">' + count + ' / ' + TOTAL_STAMPS + ' ' + ui("soFar") + '</p>' +
        '<a class="btn" href="' + escapeHtml(baseUrl()) + '">' + ui("openBook") + '</a>' +
      '</div>';
  }

  // ---------------- ADMIN: generate printable QR codes ----------------
  function renderAdmin() {
    const currentStamps = loadStamps();
    let stampButtons = "";
    for (let stampNumber = 1; stampNumber <= TOTAL_STAMPS; stampNumber++) {
      stampButtons += '<button class="stamp-toggle ' + (currentStamps[stampNumber - 1] ? "is-added" : "") + '" type="button" data-stamp="' + stampNumber + '">' + (currentStamps[stampNumber - 1] ? ui("addedStamp") : ui("addStamp")) + ' ' + String(stampNumber).padStart(2, "0") + '</button>';
    }

    app.innerHTML =
      '<div class="admin-wrap">' +
        '<p class="kicker">' + ui("adminKicker") + '</p>' +
        '<h1>' + ui("adminTitle") + '</h1>' +
        '<section class="admin-panel no-print"><h2>' + ui("testTitle") + '</h2><p>' + ui("adminNote") + '</p><div class="stamp-controls">' + stampButtons + '</div><button class="btn secondary" id="adminReset" type="button">' + ui("resetAll") + '</button></section>' +
        '<h2>' + ui("qrTitle") + '</h2>' +
        '<p>' + ui("qrLead") + '</p>' +
        '<div class="admin-controls no-print">' +
          '<label for="baseInput" style="font-size:0.85rem;color:var(--ink-soft);">' + ui("baseUrl") + '</label>' +
          '<input id="baseInput" type="text" value="' + escapeHtml(baseUrl()) + '">' +
          '<button class="btn secondary" id="printBtn" type="button">' + ui("print") + '</button>' +
        '</div>' +
        '<div class="qr-grid" id="qrGrid"></div>' +
        '<p class="no-print" style="font-size:0.8rem;color:var(--ink-soft);margin-top:1.5rem;">' +
          ui("adminHidden") +
        '</p>' +
      '</div>';

    const grid = document.getElementById("qrGrid");
    const baseInput = document.getElementById("baseInput");

    function buildCodes() {
      grid.innerHTML = "";
      const base = baseInput.value || baseUrl();
      const sep = base.indexOf("?") === -1 ? "?" : "&";
      for (let i = 1; i <= TOTAL_STAMPS; i++) {
        const url = base + sep + "s=" + i;
        const card = document.createElement("div");
        card.className = "qr-card";
        const target = document.createElement("div");
        target.className = "qr-target";
        card.appendChild(target);
        const cap = document.createElement("div");
        cap.className = "cap";
        cap.textContent = ui("stamp") + " " + String(i).padStart(2, "0");
        card.appendChild(cap);
        grid.appendChild(card);
        try {
          new QRCode(target, { text: url, width: 140, height: 140, colorDark: "#1F2A3C", colorLight: "#ffffff" });
        } catch (e) {
          target.textContent = url;
        }
      }
    }

    buildCodes();
    baseInput.addEventListener("change", buildCodes);
    document.getElementById("printBtn").addEventListener("click", function () { window.print(); });
    document.querySelectorAll(".stamp-toggle").forEach(function (button) {
      button.addEventListener("click", function () {
        const stampNumber = parseInt(button.getAttribute("data-stamp"), 10);
        const stamps = loadStamps();
        stamps[stampNumber - 1] = true;
        saveStamps(stamps);
        button.textContent = ui("addedStamp") + " " + String(stampNumber).padStart(2, "0");
        button.classList.add("is-added");
      });
    });
    document.getElementById("adminReset").addEventListener("click", function () {
      if (confirm(ui("resetConfirm"))) {
        saveStamps([]);
        renderAdmin();
      }
    });
  }
})();