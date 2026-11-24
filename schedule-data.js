// ==========================================
// 営業スケジュール設定ファイル
// ★ここを書き換えるだけでTOPページと一覧ページの両方に反映されます！
// ==========================================

const scheduleList = [
  {
    badge: "次回営業",
    isSub: false, // 青色バッジなら false、黄色バッジなら true
    date: "11月30日(土) 22:00〜",
    cast: "きさら・くらげ・ここのん・そら・ねむ",
    note: "通常お給仕営業（グループインスタンスにて開催）"
  },
  {
    badge: "次回予告",
    isSub: true,
    date: "12月5日(土) 22:00〜23:00",
    cast: "きさら・ここのん・ぴび・宇宙るる",
    note: "通常お給仕営業"
  },
  {
    badge: "営業予定",
    isSub: true,
    date: "12月12日(土) 22:00〜23:00",
    cast: "未定（公式Xにてお知らせします）",
    note: "通常お給仕営業"
  }
];

// --- ここから下は自動表示用のプログラムなので触らなくてOKです ---
document.addEventListener("DOMContentLoaded", () => {
  const createItemHTML = (item) => `
    <div class="mini-schedule-item">
      <div class="mini-date-wrap">
        <span class="mini-badge ${item.isSub ? 'sub' : ''}">${item.badge}</span>
        <span class="mini-date">${item.date}</span>
      </div>
      <div class="mini-detail">
        <span class="mini-cast">出勤：${item.cast}</span>
        <span class="mini-note">${item.note}</span>
      </div>
    </div>
  `;

  // TOPページ用（上から1件まで表示）
  const topContainer = document.getElementById("top-schedule-container");
  if (topContainer) {
    topContainer.innerHTML = scheduleList.slice(0, 1).map(createItemHTML).join("");
  }

  // スケジュール一覧ページ用（全件表示）
  const fullContainer = document.getElementById("full-schedule-container");
  if (fullContainer) {
    fullContainer.innerHTML = scheduleList.map(createItemHTML).join("");
  }
});
