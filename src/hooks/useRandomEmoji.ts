export function useRandomEmoji() {
  var emojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤨",
    "🧐",
    "🤓",
    "😎",
    "🤩",
    "🥳",
    "😏",
    "😒",
    "😞",
    "😔",
    "😟",
    "😕",
    "🙁",
    "☹️",
    "😣",
    "😖",
    "😫",
    "😩",
    "🥺",
    "😢",
    "😭",
    "😤",
    "😠",
    "😡",
    "🤬",
    "🤯",
    "😳",
    "🥵",
    "🥶",
    "😱",
    "😨",
    "😰",
    "😥",
    "😓",
    "🤗",
    "🤔",
    "🤭",
    "🤫",
    "🤥",
    "😶",
    "😐",
    "😑",
    "😬",
    "🙄",
    "😯",
    "😦",
    "😧",
    "😮",
    "😲",
    "🥱",
    "😴",
    "🤤",
    "😪",
    "😵",
    "🤐",
    "🥴",
    "🤢",
    "🤮",
    "🤧",
    "😷",
    "🤒",
    "🤕",
    "🤑",
    "🤠",
    "😈",
    "👿",
    "👹",
    "👺",
    "🤡",
    "💩",
    "👻",
    "💀",
    "☠️",
    "👽",
    "👾",
    "🤖",
    "🎃",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
    "👋",
    "🤚",
    "🖐",
    "✋",
    "🖖",
    "👌",
    "🤏",
    "✌️",
    "🤞",
    "🤟",
    "🤘",
    "🤙",
    "👈",
    "👉",
    "👆",
    "🖕",
    "👇",
    "☝️",
    "👍",
    "👎",
    "✊",
    "👊",
    "🤛",
    "🤜",
    "👏",
    "🙌",
    "👐",
    "🤲",
    "🤝",
    "🙏",
    "✍️",
    "💅",
    "🤳",
    "💪",
    "🦾",
    "🦵",
    "🦿",
    "🦶",
    "👣",
    "👂",
    "🦻",
    "👃",
    "🧠",
    "🦷",
    "🦴",
    "👀",
    "👅",
    "👄",
    "💋",
    "🩸",
    "🔥",
    "👶",
    "👧",
    "🧒",
    "👦",
    "👩",
    "🧑",
    "👨",
    "👩‍🦱",
    "👨‍🦱",
    "👩‍🦰",
    "👨‍🦰",
    "👱‍♀️",
    "👱",
    "👱‍♂️",
    "👩‍🦳",
    "👨‍🦳",
    "👩‍🦲",
    "👨‍🦲",
    "🧔",
    "👵",
    "🧓",
    "👴",
    "👲",
    "👳‍♀️",
    "👳",
    "👳‍♂️",
    "🧕",
    "👮‍♀️",
    "👮",
    "👮‍♂️",
    "👷‍♀️",
    "👷",
    "👷‍♂️",
    "💂‍♀️",
    "💂",
    "💂‍♂️",
    "🕵️‍♀️",
    "🕵️",
    "🕵️‍♂️",
    "👩‍⚕️",
    "👨‍⚕️",
    "👩‍🌾",
    "👨‍🌾",
    "👩‍🍳",
    "👨‍🍳",
    "👩‍🎓",
    "👨‍🎓",
    "👩‍🎤",
    "👨‍🎤",
    "👩‍🏫",
    "👨‍🏫",
    "👩‍🏭",
    "👨‍🏭",
    "👩‍💻",
    "👨‍💻",
    "👩‍💼",
    "👨‍💼",
    "👩‍🔧",
    "👨‍🔧",
    "👩‍🔬",
    "👨‍🔬",
    "👩‍🎨",
    "👨‍🎨",
    "👩‍🚒",
    "👨‍🚒",
    "👩‍✈️",
    "👨‍✈️",
    "👩‍🚀",
    "👨‍🚀",
    "👩‍⚖️",
    "👨‍⚖️",
    "👰",
    "🤵",
    "👸",
    "🤴",
    "🦸‍♀️",
    "🦸",
    "🦸‍♂️",
    "🦹‍♀️",
    "🦹",
    "🦹‍♂️",
    "🤶",
    "🎅",
    "🧙‍♀️",
    "🧙",
    "🧙‍♂️",
    "🧝‍♀️",
    "🧝",
    "🧝‍♂️",
    "🧛‍♀️",
    "🧛",
    "🧛‍♂️",
    "🧟‍♀️",
    "🧟",
    "🧟‍♂️",
    "🧞‍♀️",
    "🧞",
    "🧞‍♂️",
    "🧜‍♀️",
    "🧜",
    "🧜‍♂️",
    "🧚‍♀️",
    "🧚",
    "🧚‍♂️",
    "👼",
    "🤰",
    "🤱",
    "🙇‍♀️",
    "🙇",
    "🙇‍♂️",
    "💁‍♀️",
    "💁",
    "💁‍♂️",
    "🙅‍♀️",
    "🙅",
    "🙅‍♂️",
    "🙆‍♀️",
    "🙆",
    "🙆‍♂️",
    "🙋‍♀️",
    "🙋",
    "🙋‍♂️",
    "🧏‍♀️",
    "🧏",
    "🧏‍♂️",
    "🤦‍♀️",
    "🤦",
    "🤦‍♂️",
    "🤷‍♀️",
    "🤷",
    "🤷‍♂️",
    "🙎‍♀️",
    "🙎",
    "🙎‍♂️",
    "🙍‍♀️",
    "🙍",
    "🙍‍♂️",
    "💇‍♀️",
    "💇",
    "💇‍♂️",
    "💆‍♀️",
    "💆",
    "💆‍♂️",
    "🧖‍♀️",
    "🧖",
    "🧖‍♂️",
    "💅",
    "🤳",
    "💃",
    "🕺",
    "👯‍♀️",
    "👯",
    "👯‍♂️",
    "🕴",
    "👩‍🦽",
    "🧑‍🦽",
    "👨‍🦽",
    "👩‍🦼",
    "🧑‍🦼",
    "👨‍🦼",
    "🚶‍♀️",
    "🚶",
    "🚶‍♂️",
    "👩‍🦯",
    "🧑‍🦯",
    "👨‍🦯",
    "🧎‍♀️",
    "🧎",
    "🧎‍♂️",
    "🏃‍♀️",
    "🏃",
    "🏃‍♂️",
    "🧍‍♀️",
    "🧍",
    "🧍‍♂️",
    "👭",
    "🧑‍🤝‍🧑",
    "👬",
    "👫",
    "👩‍❤️‍👩",
    "💑",
    "👨‍❤️‍👨",
    "👩‍❤️‍👨",
    "👩‍❤️‍💋‍👩",
    "💏",
    "👨‍❤️‍💋‍👨",
    "👩‍❤️‍💋‍👨",
    "👪",
    "👨‍👩‍👦",
    "👨‍👩‍👧",
    "👨‍👩‍👧‍👦",
    "👨‍👩‍👦‍👦",
    "👨‍👩‍👧‍👧",
    "👨‍👨‍👦",
    "👨‍👨‍👧",
    "👨‍👨‍👧‍👦",
    "👨‍👨‍👦‍👦",
    "👨‍👨‍👧‍👧",
    "👩‍👩‍👦",
    "👩‍👩‍👧",
    "👩‍👩‍👧‍👦",
    "👩‍👩‍👦‍👦",
    "👩‍👩‍👧‍👧",
    "👨‍👦",
    "👨‍👦‍👦",
    "👨‍👧",
    "👨‍👧‍👦",
    "👨‍👧‍👧",
    "👩‍👦",
    "👩‍👦‍👦",
    "👩‍👧",
    "👩‍👧‍👦",
    "👩‍👧‍👧",
    "🗣",
    "👤",
    "👥",
    "🌂",
    "☂️",
    "🧵",
    "🪡",
    "🪢",
    "🧶",
    "👓",
    "🕶",
    "🥽",
    "🥼",
    "🦺",
    "👔",
    "👕",
    "👖",
    "🧣",
    "🧤",
    "🧥",
    "🧦",
    "👗",
    "👘",
    "🥻",
    "🩱",
    "🩲",
    "🩳",
    "👙",
    "👚",
    "👛",
    "👜",
    "👝",
    "🎒",
    "👞",
    "👟",
    "🥾",
    "🥿",
    "👠",
    "👡",
    "🩰",
    "👢",
    "👑",
    "👒",
    "🎩",
    "🎓",
    "🧢",
    "💄",
    "💍",
    "💼",
    "👋🏻",
    "🤚🏻",
    "🖐🏻",
    "✋🏻",
    "🖖🏻",
    "👌🏻",
    "🤏🏻",
    "✌🏻",
    "🤞🏻",
    "🤟🏻",
    "🤘🏻",
    "🤙🏻",
    "👈🏻",
    "👉🏻",
    "👆🏻",
    "🖕🏻",
    "👇🏻",
    "☝🏻",
    "👍🏻",
    "👎🏻",
    "✊🏻",
    "👊🏻",
    "🤛🏻",
    "🤜🏻",
    "👏🏻",
    "🙌🏻",
    "👐🏻",
    "🤲🏻",
    "🙏🏻",
    "✍🏻",
    "💅🏻",
    "🤳🏻",
    "💪🏻",
    "🦵🏻",
    "🦶🏻",
    "👂🏻",
    "🦻🏻",
    "👃🏻",
    "👶🏻",
    "👧🏻",
    "🧒🏻",
    "👦🏻",
    "👩🏻",
    "🧑🏻",
    "👨🏻",
    "👩🏻‍🦱",
    "👨🏻‍🦱",
    "👩🏻‍🦰",
    "👨🏻‍🦰",
    "👱🏻‍♀️",
    "👱🏻",
    "👱🏻‍♂️",
    "👩🏻‍🦳",
    "👨🏻‍🦳",
    "👩🏻‍🦲",
    "👨🏻‍🦲",
    "🧔🏻",
    "👵🏻",
    "🧓🏻",
    "👴🏻",
    "👲🏻",
    "👳🏻‍♀️",
    "👳🏻",
    "👳🏻‍♂️",
    "🧕🏻",
    "👮🏻‍♀️",
    "👮🏻",
    "👮🏻‍♂️",
    "👷🏻‍♀️",
    "👷🏻",
    "👷🏻‍♂️",
    "💂🏻‍♀️",
    "💂🏻",
    "💂🏻‍♂️",
    "🕵🏻‍♀️",
    "🕵🏻",
    "🕵🏻‍♂️",
    "👩🏻‍⚕️",
    "🙇🏻‍♀️",
    "🙇🏻",
    "🙇🏻‍♂️",
    "💁🏻‍♀️",
    "💁🏻",
    "💁🏻‍♂️",
    "🙅🏻‍♀️",
    "🙅🏻",
    "🙅🏻‍♂️",
    "🙆🏻‍♀️",
    "🙆🏻",
    "🙆🏻‍♂️",
    "🙋🏻‍♀️",
    "🙋🏻",
    "🙋🏻‍♂️",
    "🧏🏻‍♀️",
    "🧏🏻",
    "🧏🏻‍♂️",
    "🤦🏻‍♀️",
    "🤦🏻",
    "🤦🏻‍♂️",
    "🤷🏻‍♀️",
    "🤷🏻",
    "🤷🏻‍♂️",
    "🙎🏻‍♀️",
    "🙎🏻",
    "🙎🏻‍♂️",
    "🙍🏻‍♀️",
    "🙍🏻",
    "🙍🏻‍♂️",
    "💇🏻‍♀️",
    "💇🏻",
    "💇🏻‍♂️",
    "💆🏻‍♀️",
    "💆🏻",
    "💆🏻‍♂️",
    "🧖🏻‍♀️",
    "🧖🏻",
    "🧖🏻‍♂️",
    "💃🏻",
    "🕺🏻",
    "🕴🏻",
    "👩🏻‍🦽",
    "👨🏻‍🦽",
    "👩🏻‍🦼",
    "👨🏻‍🦼",
    "🚶🏻‍♀️",
    "🚶🏻",
    "🚶🏻‍♂️",
    "👩🏻‍🦯",
    "👨🏻‍🦯",
    "🧎🏻‍♀️",
    "🧎🏻",
    "🧎🏻‍♂️",
    "🏃🏻‍♀️",
    "🏃🏻",
    "🏃🏻‍♂️",
    "🧍🏻‍♀️",
    "🧍🏻",
    "🧍🏻‍♂️",
    "👭🏻",
    "🧑🏻‍🤝‍🧑🏻",
    "👬🏻",
    "👫🏻",
    "🧗🏻‍♀️",
    "🧗🏻",
    "🧗🏻‍♂️",
    "🏇🏻",
    "🏂🏻",
    "🏌🏻‍♀️",
    "🏌🏻",
    "🏌🏻‍♂️",
    "🏄🏻‍♀️",
    "🏄🏻",
    "🏄🏻‍♂️",
    "🚣🏻‍♀️",
    "🚣🏻",
    "🚣🏻‍♂️",
    "🏊🏻‍♀️",
    "🏊🏻",
    "🏊🏻‍♂️",
    "⛹🏻‍♀️",
    "⛹🏻",
    "⛹🏻‍♂️",
    "🏋🏻‍♀️",
    "🏋🏻",
    "🏋🏻‍♂️",
    "🚴🏻‍♀️",
    "🚴🏻",
    "🚴🏻‍♂️",
    "🚵🏻‍♀️",
    "🚵🏻",
    "🚵🏻‍♂️",
    "🤸🏻‍♀️",
    "🤸🏻",
    "🤸🏻‍♂️",
    "🤽🏻‍♀️",
    "🤽🏻",
    "🤽🏻‍♂️",
    "🤾🏻‍♀️",
    "🤾🏻",
    "🤾🏻‍♂️",
    "🤹🏻‍♀️",
    "🤹🏻",
    "🤹🏻‍♂️",
    "🧘🏻‍♀️",
    "🧘🏻",
    "🧘🏻‍♂️",
    "🛀🏻",
    "🛌🏻",
    "🍏",
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🍈",
    "🍒",
    "🍑",
    "🥭",
    "🍍",
    "🥥",
    "🥝",
    "🍅",
    "🍆",
    "🥑",
    "🥦",
    "🥬",
    "🥒",
    "🌶",
    "🌽",
    "🥕",
    "🧄",
    "🧅",
    "🥔",
    "🍠",
    "🥐",
    "🥯",
    "🍞",
    "🥖",
    "🥨",
    "🧀",
    "🥚",
    "🍳",
    "🧈",
    "🥞",
    "🧇",
    "🥓",
    "🥩",
    "🍗",
    "🍖",
    "🦴",
    "🌭",
    "🍔",
    "🍟",
    "🍕",
    "🥪",
    "🥙",
    "🧆",
    "🌮",
    "🌯",
    "🥗",
    "🥘",
    "🥫",
    "🍝",
    "🍜",
    "🍲",
    "🍛",
    "🍣",
    "🍱",
    "🥟",
    "🦪",
    "🍤",
    "🍙",
    "🍚",
    "🍘",
    "🍥",
    "🥠",
    "🥮",
    "🍢",
    "🍡",
    "🍧",
    "🍨",
    "🍦",
    "🥧",
    "🧁",
    "🍰",
    "🎂",
    "🍮",
    "🍭",
    "🍬",
    "🍫",
    "🍿",
    "🍩",
    "🍪",
    "🌰",
    "🥜",
    "🍯",
    "🥛",
    "🍼",
    "☕️",
    "🍵",
    "🧃",
    "🥤",
    "🧋",
    "🍶",
    "🍺",
    "🍻",
    "🥂",
    "🍷",
    "🥃",
    "🍸",
    "🍹",
    "🧉",
    "🍾",
    "🧊",
    "🥄",
    "🍴",
    "🍽",
    "🥣",
    "🥡",
    "🥢",
    "🧂",
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🖤",
    "🤍",
    "🤎",
    "💔",
    "❣️",
    "💕",
    "💞",
    "💓",
    "💗",
    "💖",
    "💘",
    "💝",
    "💟",
    "☮️",
    "✝️",
    "☪️",
    "🕉",
    "☸️",
    "✡️",
    "🔯",
    "🕎",
    "☯️",
    "☦️",
    "🛐",
    "⛎",
    "♈️",
    "♉️",
    "♊️",
    "♋️",
    "♌️",
    "♍️",
    "♎️",
    "♏️",
    "♐️",
    "♑️",
    "♒️",
    "♓️",
    "🆔",
    "⚛️",
    "🉑",
    "☢️",
    "☣️",
    "📴",
    "📳",
    "🈶",
    "🈚️",
    "🈸",
    "🈺",
    "🈷️",
    "✴️",
    "🆚",
    "💮",
    "🉐",
    "㊙️",
    "㊗️",
    "🈴",
    "🈵",
    "🈹",
    "🈲",
    "🅰️",
    "🅱️",
    "🆎",
    "🆑",
    "🅾️",
    "🆘",
    "❌",
    "⭕️",
    "🛑",
    "⛔️",
    "📛",
    "🚫",
    "💯",
    "💢",
    "♨️",
    "🚷",
    "🚯",
    "🚳",
    "🚱",
    "🔞",
    "📵",
    "🚭",
    "❗️",
    "❕",
    "❓",
    "❔",
    "‼️",
    "⁉️",
    "🔅",
    "🔆",
    "〽️",
    "⚠️",
    "🚸",
    "🔱",
    "⚜️",
    "🔰",
    "♻️",
    "✅",
    "🈯️",
    "💹",
    "❇️",
    "✳️",
    "❎",
    "🌐",
    "💠",
    "Ⓜ️",
    "🌀",
    "💤",
    "🏧",
    "🚾",
    "♿️",
    "🅿️",
    "🈳",
    "🈂️",
    "🛂",
    "🛃",
    "🛄",
    "🛅",
    "🚹",
    "🚺",
    "🚼",
    "⚧",
    "🚻",
    "🚮",
    "🎦",
    "📶",
    "🈁",
    "🔣",
    "🔤",
    "🔡",
    "🔠",
    "🆖",
    "🆗",
    "🆙",
    "🆒",
    "🆕",
    "🆓",
    "0️⃣",
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "🔟",
    "🔢",
    "#️⃣",
    "*️⃣",
    "⏏️",
    "▶️",
    "⏸",
    "⏯",
    "⏹",
    "⏺",
    "⏭",
    "⏮",
    "⏩",
    "⏪",
    "⏫",
    "⏬",
    "◀️",
    "🔼",
    "🔽",
    "➡️",
    "⬅️",
    "⬆️",
    "⬇️",
    "↗️",
    "↘️",
    "↙️",
    "↖️",
    "↕️",
    "↔️",
    "↪️",
    "↩️",
    "⤴️",
    "⤵️",
    "🔀",
    "🔁",
    "🔂",
    "🔄",
    "🔃",
    "🎵",
    "🎶",
    "➕",
    "➖",
    "➗",
    "✖️",
    "💲",
    "💱",
    "〰️",
    "➿",
    "🔚",
    "🔙",
    "🔛",
    "🔝",
    "🔜",
    "✔️",
    "☑️",
    "🔘",
    "🔴",
    "🟠",
    "🟡",
    "🟢",
    "🔵",
    "🟣",
    "⚫️",
    "⚪️",
    "🟤",
    "🔺",
    "🔻",
    "🔸",
    "🔹",
    "🔶",
    "🔷",
    "🔳",
    "🔲",
    "🟥",
    "🟧",
    "🟨",
    "🟩",
    "🟦",
    "🟪",
    "⬛️",
    "⬜️",
    "🟫",
    "🔈",
    "🔇",
    "🔉",
    "🔊",
    "🔔",
    "🔕",
    "📣",
    "📢",
    "👁‍🗨",
    "💬",
    "💭",
    "🃏",
    "🎴",
    "🀄️",
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛",
    "🕜",
    "🕝",
    "🕞",
    "🕟",
    "🕠",
    "🕡",
    "🕢",
    "🕣",
    "🕤",
    "🕥",
    "🕦",
    "🕧",
  ]

  return emojis[Math.floor(Math.random() * emojis.length)]
}