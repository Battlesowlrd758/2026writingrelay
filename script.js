(function () {
  // ---------------------------------------------------------------
  // CUSTOMIZE HERE
  // ---------------------------------------------------------------
  var TOTAL_STAMPS = 13;

  // One story fragment per stamp, revealed in order as stamps are collected.
  // Rewrite these with your own story — keep the array length equal to TOTAL_STAMPS.
  var STORY = [
    "The well wasn’t there yesterday, but it's here now. No big deal, right? It’s just a new well. Normally, I’d agree with you. But who digs a well in the middle of the woods? And why does it look like some well made in the sixteenth century, rough rocks the size of bricks making a circle, moss growing on the stones as if they’ve grown there since dinosaurs walked the Earth? Do I even really want these questions answered? I’ve walked these woods by my house for years and have never seen a well here. Or anywhere in the woods. Sometimes I see old foundations of houses grown over with weeds and trees. There is even a collapsed cellar from about two hundred years ago, a perfect place to duck into during a game of hide and seek. On my thirteenth birthday last year, I even discovered an old cobblestone road hidden under twenty centimeters of dirt. But this clearing in the woods never had a well, and a well doesn’t just appear like this suddenly.\n\nAt first I wanted to look in the well. I got close to the edge but chickened out. I’m not sure why. A cold feeling came over me, and I couldn’t push myself to get near the edge and peek down. Maybe it was just the strangeness of it all.\n\nMy next idea was to ask my dad.",
    "As I was healing back, I saw some more things that probably weren't there at first, red mushrooms and some red flowers that I couldn't tell the name of, no big deal probably. Making my way back to the house, the red flowers were still around the forest, maybe with some white ones. I made it back home but I surprisingly didn't see any squirrels like I usually do, that was strange. I opened the door to my house to ask my dad about it.",
    "I went upstairs beneath the silence to my room. Cozy as always, though today it wasn’t. Strange, wasn’t it? Maybe my senses faded out and I’m a rock now. I sat on my bed and glanced at different parts of my room. A foot away from me, the stack of paper I kept on top of my desk fell onto the floor, yet no window was open whatsoever for wind to come in.\n\nI picked it up, and placed it next to me, when I caught a glimpse of an old letter sitting right in the middle of the desk in the corner of my eye. It was rigid, but felt like a letter given from the medieval ages. In it said;\n\nDesolate it may be, it thrived with life.\n\nAt least that was once in the timeline.\n\nAn old book fell downstairs, and now vines cover it.\n\nMaybe even moss.\n\nIt had a tale.\n\nDeciphering it required knowledge.\n\nBut even then, after stacks of paperwork and bookshelves,\n\nIt wasn’t close to enough.\n\nA sigil may open that door,\n\nBut will never unlock the Stratum.\n\nThe Arbiter once must hold that secret within, for years,\n\nBut a Paragon will hold it forever.\n\nI read it over and over, until the words didn’t make sense to me anymore, sort of like jamais vu. In the letter, I also found a key. The moment I held it, zephyr around me gushed and the door on the closet opened wistfully.\n\nBehind it, a dim light of wisp-glow shone right at me, so bright but so dim. Strange, I thought. I have to ask my father about it.",
    "I stepped closer to the closet, but stopped just short before I could reach. The lights coming from inside flickered, almost like a candle trying to decide whether it wanted to stay lit or not.\n\nI had no idea what that wisp of glow was, or why a key I had never seen opened my closet by itself. I really wanted to shut the door and go under the bed like nothing ever happened,but the curiosity inside me got the better of me. WIth a mixed feeling of anxiety, nervous, and curiosity I reached my hand towards the opening. I felt something that I felt before. It was the same cold feeling from the well in the woods. Whatever was inside this closet, I had a feeling it wasn't something that had been in there yesterday. I took one more tiny step towards it and peeked inside. There were no clothes, boxes, hangers, or the old junk like there was from my 6th birthday. Instead, there was a narrow stone staircase leading downwards, which I couldn't see until the end. I froze for a while, wondering how that possibly could be there. Then from the bottom of the staircase, I heard something quiet. It sounded like something scraping against the stone. The sound got bigger, closer. I instinctively shut the closet. Maybe asking about the well could wait. Maybe I should ask him about the closet first.",
    "A neighbor remembered the sound of typewriters through the ceiling — always after dark, always followed by laughter.",
    "The sixth fragment was water-stained, as if it had waited a long time in someone's coat pocket before being found.",
    "It described a ritual: each member arrived with one page and left with someone else's, so no story ever belonged to just one hand.",
    "The eighth page was newer than the rest. Different ink. Someone was still writing this — right now, in the present tense.",
    "A line appeared: 'If you have gathered this far, you are not finding a story. You are being invited into one.'",
    "The tenth fragment gave no plot at all — only an address, and the words: 'Thursdays. Bring one page. Leave with another.'",
    "Two new pages were waiting beneath the address. They spoke of the people who kept the circle alive, each carrying a different kind of beginning.",
    "The circle's members had each left a page behind, not to be solved, but to be continued by whoever arrived next.",
    "The final fragment completed the seal. Underneath it, at last, a name: The Writing Circle. The door, it turns out, was never locked."
  ];

  // Add Japanese versions here later, in the same order as STORY.
  var STORY_JA = Array(TOTAL_STAMPS).fill("ここに日本語のストーリーを追加してください。");

  // Replace these sample entries with the real teachers' introductions and stories.
  var TEACHER_STORIES = [
    { name: "Teacher One", nameJa: "先生＃１", intro: "A guide who helps each voice find its shape.", introJa: "一人ひとりの声が形になるように導く先生。", story: "Add this teacher's introduction and story here when you are ready." },
    { name: "Teacher Two", nameJa: "先生＃２", intro: "A patient reader who makes room for new ideas.", introJa: "新しいアイデアを受け止める、辛抱強い読者。", story: "Add this teacher's introduction and story here when you are ready." }
  ];

  // Replace these sample entries with the real members' introductions and stories.
  var MEMBER_STORIES = [
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
  var STORAGE_KEY = "inkTrailStamps_v1";
  var THEME_KEY = "inkTrailTheme_v1";
  var LANGUAGE_KEY = "inkTrailLanguage_v1";
  var app = document.getElementById("app");
  var activeLanguage;

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  function initialTheme() {
    var savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function addThemeToggle() {
    var toggle = document.createElement("button");
    toggle.className = "theme-toggle no-print";
    toggle.type = "button";
    function updateLabel() {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      toggle.textContent = activeLanguage === "ja" ? (dark ? "ライト" : "ダーク") : (dark ? "Light mode" : "Dark mode");
      toggle.setAttribute("aria-label", activeLanguage === "ja" ? (dark ? "ライトモードに切り替える" : "ダークモードに切り替える") : (dark ? "Switch to light mode" : "Switch to dark mode"));
    }
    updateLabel();
    toggle.addEventListener("click", function () {
      var nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
      updateLabel();
    });
    app.appendChild(toggle);
  }

  function initialLanguage() {
    var savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    return savedLanguage === "ja" ? "ja" : "en";
  }
  function storyText(index) {
    return activeLanguage === "ja" && STORY_JA[index] ? STORY_JA[index] : STORY[index];
  }
  function personText(person, field) {
    var japaneseField = field + "Ja";
    return activeLanguage === "ja" && person[japaneseField] ? person[japaneseField] : person[field];
  }
  var UI = {
    en: {
      rallyKicker: "A STORY TOLD IN STAMPS", title: "The Ink Trail", homeLead: "Scan each stamp as you find it. Every one you collect reveals another page of the story below.", about: "About the circle", collected: "stamps collected", journal: "Field journal", completeTitle: "The whole story is yours", completeLead: "All thirteen pages are found. What they were pointing to has a door of its own.", stepThrough: "Step through", keepLooking: "Keep looking", keepLookingLead: "Find the remaining QR stamps to complete the story and unlock what comes after it.", reset: "Reset progress", circleKicker: "THE WRITING CIRCLE", circleTitle: "A room for unfinished things", circleLead: "The Writing Circle is a small gathering for people who want to write, read, and make room for one another.", circleP1: "We bring one page to the table and leave with another. A paragraph can be polished, strange, funny, uncertain, or only half alive. It still belongs in the room.", circleP2: "The circle is built on attention rather than performance: listen closely, share generously, and let each person keep their own voice.", meetPeople: "MEET THE PEOPLE", chooseName: "Choose a name to open their story", teachers: "Teachers", members: "Members", backBook: "Back to stamp book", memberStory: "MEMBER STORY", teacherStory: "TEACHER STORY", printPdf: "Print or save as PDF", backPeople: "Back to people", collectedTitle: "collected!", alreadyTitle: "already in your book", alreadyNote: "You'd already found this one. No harm in visiting twice.", soFar: "stamps so far.", openBook: "Open my stamp book", adminKicker: "ADMIN HUB", adminTitle: "Manage the Ink Trail", testTitle: "Test or reset progress", adminNote: "These controls affect stamps saved in this browser only.", resetAll: "Reset all collected stamps", qrTitle: "Print your stamp QR codes", qrLead: "Each QR code below points to this page with a different stamp number. Print this page, cut the codes apart, and place one at each stamp location. Scanning a code collects that stamp for whoever scans it.", baseUrl: "Base URL:", print: "Print", adminHidden: "This admin view is only reachable with the encoded admin key in the address — it is not linked from the stamp book itself.", stamp: "STAMP", toReveal: "TO REVEAL", addStamp: "Add stamp", addedStamp: "Added stamp", resetConfirm: "Reset all collected stamps on this device?"
    },
    ja: {
      rallyKicker: "スタンプでつづる物語", title: "インク・トレイル", homeLead: "スタンプを見つけたらスキャンしてください。集めるたびに、下の物語のページが開きます。", about: "サークルについて", collected: "個のスタンプを集めました", journal: "フィールド・ジャーナル", completeTitle: "物語をすべて集めました", completeLead: "13ページすべてが見つかりました。物語が指していた先への扉が開きます。", stepThrough: "中へ進む", keepLooking: "まだ探し続けて", keepLookingLead: "残りのQRスタンプを見つけて、物語の続きを開きましょう。", reset: "進行状況をリセット", circleKicker: "ライティング・サークル", circleTitle: "未完成なもののための部屋", circleLead: "ライティング・サークルは、書き、読み、お互いのための場所をつくる小さな集まりです。", circleP1: "一枚のページを持ち寄り、別のページを持ち帰ります。磨かれた文章も、奇妙な文章も、まだ途中の文章も、この部屋に居場所があります。", circleP2: "このサークルで大切なのは、評価よりも向き合うこと。よく聴き、惜しみなく分かち合い、それぞれの声を大切にします。", meetPeople: "参加者", chooseName: "名前を選んで物語を読む", teachers: "先生", members: "メンバー", backBook: "スタンプ帳に戻る", memberStory: "メンバーの物語", teacherStory: "先生の物語", printPdf: "印刷またはPDFとして保存", backPeople: "参加者に戻る", collectedTitle: "を集めました！", alreadyTitle: "はすでに集めています", alreadyNote: "このスタンプはすでに見つけています。もう一度訪れても大丈夫です。", soFar: "個のスタンプを集めています。", openBook: "スタンプ帳を開く", adminKicker: "管理ハブ", adminTitle: "インク・トレイルを管理", testTitle: "進行状況をテストまたはリセット", adminNote: "これらの操作は、このブラウザーに保存された進行状況だけに作用します。", resetAll: "集めたスタンプをすべてリセット", qrTitle: "スタンプQRコードを印刷", qrLead: "下のQRコードは、それぞれ違うスタンプ番号のページにつながります。印刷して切り分け、各場所に置いてください。スキャンすると、そのスタンプが集まります。", baseUrl: "ベースURL:", print: "印刷", adminHidden: "この管理画面は、エンコードされた管理キーを使ったURLからのみ開けます。スタンプ帳からはリンクされていません。", stamp: "スタンプ", toReveal: "見つけるには", addStamp: "スタンプを追加", addedStamp: "追加済み", resetConfirm: "この端末の集めたスタンプをすべてリセットしますか？"
    }
  };
  function ui(key) {
    return UI[activeLanguage][key] || UI.en[key] || key;
  }
  function addLanguageToggle() {
    var toggle = document.createElement("button");
    toggle.className = "language-toggle no-print";
    toggle.type = "button";
    toggle.textContent = activeLanguage === "ja" ? "English" : "日本語";
    toggle.setAttribute("aria-label", activeLanguage === "ja" ? "Switch to English" : "日本語に切り替える");
    toggle.addEventListener("click", function () {
      localStorage.setItem(LANGUAGE_KEY, activeLanguage === "ja" ? "en" : "ja");
      window.location.reload();
    });
    app.appendChild(toggle);
  }

  applyTheme(initialTheme());
  activeLanguage = initialLanguage();
  UI.ja.chooseName = "メンバーを選んでもっと知ろう！";

  function loadStamps() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var arr = raw ? JSON.parse(raw) : [];
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
    var form = document.getElementById("adminLoginForm");
    var passwordInput = document.getElementById("adminPassword");
    var loginPanel = document.getElementById("loginPanel");
    var dashboard = document.getElementById("adminDashboard");
    var errorMessage = document.getElementById("loginError");

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      errorMessage.hidden = true;

      try {
        var response = await fetch("/api/admin-login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: passwordInput.value })
        });
        var result = await response.json();
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
    var totalStamps = Number(adminData.totalStamps) || TOTAL_STAMPS;
    var storageKey = adminData.storageKey || "inkTrailStamps_v1";
    var baseInput = document.getElementById("baseInput");
    var grid = document.getElementById("qrGrid");
    var controls = document.getElementById("stampControls");
    baseInput.value = adminData.qrBaseUrl || (window.location.origin + "/");

    function loadAdminStamps() {
      try {
        var raw = localStorage.getItem(storageKey);
        var stamps = raw ? JSON.parse(raw) : [];
        return Array.isArray(stamps) ? stamps : [];
      } catch (error) { return []; }
    }
    function saveAdminStamps(stamps) {
      try { localStorage.setItem(storageKey, JSON.stringify(stamps)); } catch (error) {}
    }
    function buildStampControls() {
      var stamps = loadAdminStamps();
      controls.innerHTML = "";
      for (var stampNumber = 1; stampNumber <= totalStamps; stampNumber++) {
        var button = document.createElement("button");
        button.className = "stamp-toggle" + (stamps[stampNumber - 1] ? " is-added" : "");
        button.type = "button";
        button.textContent = (stamps[stampNumber - 1] ? "Added stamp " : "Add stamp ") + String(stampNumber).padStart(2, "0");
        button.addEventListener("click", function () {
          var number = parseInt(this.textContent.match(/\d+$/)[0], 10);
          var current = loadAdminStamps();
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
      var base = baseInput.value || (window.location.origin + "/");
      var separator = base.indexOf("?") === -1 ? "?" : "&";
      for (var stampNumber = 1; stampNumber <= totalStamps; stampNumber++) {
        var url = base + separator + "s=" + stampNumber;
        var card = document.createElement("div");
        card.className = "qr-card";
        var target = document.createElement("div");
        target.className = "qr-target";
        var caption = document.createElement("div");
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

  var params = new URLSearchParams(window.location.search);
  var stampParam = parseInt(params.get("s"), 10);
  var isLegacyAdminUrl = params.has("admin");

  if (isLegacyAdminUrl) {
    window.location.replace("admin.html");
  } else if (params.get("intro") === "1") {
    renderIntro();
  } else if (params.get("circle") === "1") {
    renderCircle();
  } else if (stampParam && stampParam >= 1 && stampParam <= TOTAL_STAMPS) {
    renderCollect(stampParam);
  } else {
    renderHome();
  }
  addThemeToggle();
  addLanguageToggle();

  // ---------------- HOME ----------------
  function renderHome() {
    var stamps = loadStamps();
    var count = stamps.filter(Boolean).length;
    var complete = count >= TOTAL_STAMPS;

    var slotsHtml = "";
    var tilts = [-6, 4, -3, 7, -8, 2, -5, 6, -2, 5, -7];
    for (var i = 1; i <= TOTAL_STAMPS; i++) {
      var filled = !!stamps[i - 1];
      slotsHtml += '<div class="slot' + (filled ? " filled" : "") + '" style="--tilt:' + tilts[(i - 1) % tilts.length] + 'deg">' +
        (filled ? "✦" : i) + '</div>';
    }

    var entriesHtml = "";
    for (var j = 1; j <= TOTAL_STAMPS; j++) {
      var have = !!stamps[j - 1];
      entriesHtml += '<div class="entry' + (have ? "" : " locked") + '">' +
        '<div class="num">' + String(j).padStart(2, "0") + '</div>' +
        '<p><span class="story-text">' + storyHtml(storyText(j - 1)) + '</span>' +
          (have ? "" : '<span class="locked-hint">' + ui("stamp") + ' ' + j + '<br>' + ui("toReveal") + '</span>') +
        '</p>' +
        '</div>';
    }

    var unlockHtml = complete
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
          '<nav class="page-nav"><a class="btn secondary" href="' + escapeHtml(baseUrl()) + '?intro=1">' + ui("about") + '</a></nav>' +
        '</div>' +
        '<div class="stamps-row">' + slotsHtml + '</div>' +
        '<p class="progress-caption"><strong>' + count + ' / ' + TOTAL_STAMPS + '</strong> ' + ui("collected") + '</p>' +
        '<div class="journal">' +
          '<h2>' + ui("journal") + '</h2>' +
          entriesHtml +
        '</div>' +
        unlockHtml +
        '<footer>' +
          '<button class="linklike" id="resetBtn">' + ui("reset") + '</button>' +
        '</footer>' +
      '</div>';

    var resetBtn = document.getElementById("resetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (confirm("Clear all collected stamps on this device?")) {
          saveStamps([]);
          renderHome();
        }
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

  // ---------------- UNLOCKED WRITING CIRCLE ----------------
  function renderCircle() {
    var stamps = loadStamps();
    if (stamps.filter(Boolean).length < TOTAL_STAMPS) {
      renderHome();
      return;
    }

    var personParam = params.get("person");
    var personMatch = personParam ? personParam.match(/^(teacher|member)-(\d+)$/) : null;
    if (personMatch) {
      var personIndex = parseInt(personMatch[2], 10) - 1;
      var personList = personMatch[1] === "teacher" ? TEACHER_STORIES : MEMBER_STORIES;
      if (personIndex >= 0 && personIndex < personList.length) {
        renderPerson(personList[personIndex], personMatch[1] === "teacher" ? "TEACHER STORY" : "MEMBER STORY");
        return;
      }
    }

    function peopleLinks(people, prefix) {
      return people.map(function (person, index) {
        var personId = prefix + "-" + (index + 1);
        return '<article class="member-card"><a class="member-name" href="' + escapeHtml(baseUrl()) + '?circle=1&person=' + personId + '">' + escapeHtml(personText(person, "name")) + '</a><p>' + escapeHtml(personText(person, "intro")) + '</p></article>';
      }).join("");
    }
    var teacherLinks = peopleLinks(TEACHER_STORIES, "teacher");
    var memberLinks = peopleLinks(MEMBER_STORIES, "member");

    app.innerHTML =
      '<div class="content-page circle-page">' +
        '<p class="kicker">' + ui("circleKicker") + '</p>' +
        '<h1>' + ui("circleTitle") + '</h1>' +
        '<p class="lead">' + ui("circleLead") + '</p>' +
        '<div class="prose"><p>' + ui("circleP1") + '</p><p>' + ui("circleP2") + '</p></div>' +
        '<section class="members-directory" id="people"><p class="kicker">' + ui("meetPeople") + '</p><h2>' + ui("chooseName") + '</h2><div class="people-group"><h3>' + ui("teachers") + '</h3>' + teacherLinks + '</div><div class="people-group"><h3>' + ui("members") + '</h3>' + memberLinks + '</div></section>' +
        '<div class="page-actions"><a class="btn secondary" href="' + escapeHtml(baseUrl()) + '">' + ui("backBook") + '</a></div>' +
      '</div>';
  }

  function renderPerson(person, label) {
    app.innerHTML =
      '<div class="content-page person-page">' +
        '<p class="kicker">' + (label === "TEACHER STORY" ? ui("teacherStory") : ui("memberStory")) + '</p>' +
        '<h1>' + escapeHtml(personText(person, "name")) + '</h1>' +
        '<p class="lead">' + escapeHtml(personText(person, "intro")) + '</p>' +
        '<article class="person-story"><p>' + storyHtml(personText(person, "story")) + '</p></article>' +
        '<div class="page-actions person-actions">' +
          '<button class="btn" id="printPerson" type="button">' + ui("printPdf") + '</button>' +
          '<a class="btn secondary" href="' + escapeHtml(baseUrl()) + '?circle=1">' + ui("backPeople") + '</a>' +
        '</div>' +
      '</div>';

    document.getElementById("printPerson").addEventListener("click", function () { window.print(); });
  }

  // ---------------- COLLECT (from a scanned QR) ----------------
  function renderCollect(n) {
    var stamps = loadStamps();
    var alreadyHad = !!stamps[n - 1];
    stamps[n - 1] = true;
    saveStamps(stamps);

    var count = stamps.filter(Boolean).length;

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
    var currentStamps = loadStamps();
    var stampButtons = "";
    for (var stampNumber = 1; stampNumber <= TOTAL_STAMPS; stampNumber++) {
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

    var grid = document.getElementById("qrGrid");
    var baseInput = document.getElementById("baseInput");

    function buildCodes() {
      grid.innerHTML = "";
      var base = baseInput.value || baseUrl();
      var sep = base.indexOf("?") === -1 ? "?" : "&";
      for (var i = 1; i <= TOTAL_STAMPS; i++) {
        var url = base + sep + "s=" + i;
        var card = document.createElement("div");
        card.className = "qr-card";
        var target = document.createElement("div");
        target.className = "qr-target";
        card.appendChild(target);
        var cap = document.createElement("div");
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
        var stampNumber = parseInt(button.getAttribute("data-stamp"), 10);
        var stamps = loadStamps();
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