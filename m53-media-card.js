(() => {
  const I = {
    power: 'm16.56 5.44-1.45 1.45A5.97 5.97 0 0 1 18 12a6 6 0 0 1-6 6 6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44A7.96 7.96 0 0 0 4 12a8 8 0 0 0 8 8 8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 3h-2v10h2',
    prev: 'M6 18V6h2v12zm3.5-6L18 6v12z',
    next: 'M16 18h2V6h-2M6 18l8.5-6L6 6z',
    play: 'M8 5.14v14l11-7z',
    pause: 'M14 19h4V5h-4M6 19h4V5H6z',
    vdown: 'M3 9h4l5-5v16l-5-5H3zm11 2h8v2h-8z',
    vup: 'M3 9h4l5-5v16l-5-5H3zm11 2h3V8h2v3h3v2h-3v3h-2v-3h-3z',
    mute: 'M12 4 9.91 6.09 12 8.18M4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.26c-.67.51-1.42.93-2.25 1.17v2.07c1.38-.32 2.63-.95 3.68-1.81L19.73 21 21 19.73l-9-9M19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.9 8.9 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-2.5 0c0-1.77-1-3.29-2.5-4.03v2.21l2.45 2.45c.05-.2.05-.42.05-.63',
    vol: 'M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77s-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9z',
    back: 'M13.5 7a6.5 6.5 0 0 1 6.5 6.5 6.5 6.5 0 0 1-6.5 6.5H10v-2h3.5c2.5 0 4.5-2 4.5-4.5S16 9 13.5 9H7.83l3.08 3.09L9.5 13.5 4 8l5.5-5.5 1.42 1.41L7.83 7zM6 18h2v2H6z',
    home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    menu: 'M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z',
    remote: 'M12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41A8.95 8.95 0 0 1 12 2c2.5 0 4.74 1 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0M7.05 6.05l1.41 1.41a5.02 5.02 0 0 1 7.08 0l1.41-1.41A6.98 6.98 0 0 0 12 4c-1.93 0-3.68.78-4.95 2.05M12 15a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2m3-6H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1',
    chev: 'M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6z',
    search: 'M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5',
    x: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    shuffle: 'm17 3 5.25 4.5L17 12l5.25 4.5L17 21v-3h-2.74l-2.82-2.82 2.12-2.12L15.5 15H17V9h-1.5l-9 9H2v-3h3.26l9-9H17zM2 6h4.5l2.82 2.82-2.12 2.12L5.26 9H2z',
    repeat: 'M17 17H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2z',
    repeatone: 'M13 15V9h-1l-2 1v1h1.5v4m5.5 2H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2z',
    back2: 'M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11z',
    folder: 'M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z',
    note: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3z',
    lyrics: 'M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 2h14v14H5zm2 2v2h10V7zm0 4v2h10v-2zm0 4v2h7v-2z',
    go: 'M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6z',
    queue: 'M3 16h7v-2H3m15-4h-2v4h-4v2h4v4h2v-4h4v-2h-4M14 6H3v2h11m0 2H3v2h11z',
    check: 'M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59z',
  };
  const svg = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${I[n]}"/></svg>`;
  const spin = (size = 0.4, cls = '') => `<span class="loader ${cls}" style="--size:${size}px" role="status" aria-label="Loading"></span>`;

  const KEYS = {
    roku: { up: 'up', down: 'down', left: 'left', right: 'right', ok: 'select', back: 'back', home: 'home', menu: 'info', play: 'play' },
    apple_tv: { up: 'up', down: 'down', left: 'left', right: 'right', ok: 'select', back: 'menu', home: 'home', menu: 'top_menu', play: 'play_pause' },
    androidtv: { up: 'UP', down: 'DOWN', left: 'LEFT', right: 'RIGHT', ok: 'CENTER', back: 'BACK', home: 'HOME', menu: 'MENU', play: 'PLAY_PAUSE' },
    androidtv_remote: { up: 'DPAD_UP', down: 'DPAD_DOWN', left: 'DPAD_LEFT', right: 'DPAD_RIGHT', ok: 'DPAD_CENTER', back: 'BACK', home: 'HOME', menu: 'MENU', play: 'MEDIA_PLAY_PAUSE' },
    xbox: { up: 'Up', down: 'Down', left: 'Left', right: 'Right', ok: 'A', back: 'B', home: 'Nexus', menu: 'Menu', play: 'PlayPause' },
  };
  const F = { PAUSE: 1, SEEK: 2, VSET: 4, MUTE: 8, PREV: 16, NEXT: 32, ON: 128, OFF: 256, PLAY_MEDIA: 512, VSTEP: 1024, SOURCE: 2048, PLAY: 16384, SHUFFLE: 32768, BROWSE: 131072, REPEAT: 262144, SEARCH: 4194304, ENQUEUE: 2097152 };
  const has = (s, f) => !!s && ((s.attributes.supported_features || 0) & f) === f;
  const esc = (t) => String(t ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const mmss = (s) => { s = Math.max(0, Math.round(s || 0)); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = String(s % 60).padStart(2, '0'); return h ? `${h}:${String(m).padStart(2, '0')}:${x}` : `${m}:${x}`; };
  const LRC = new Map();
  const parseLrc = (txt) => {
    const out = [];
    for (const raw of String(txt).split(/\r?\n/)) {
      const tags = [...raw.matchAll(/\[(\d+):(\d+(?:\.\d+)?)\]/g)];
      if (!tags.length) continue;
      const text = raw.replace(/\[\d+:\d+(?:\.\d+)?\]/g, '').trim();
      for (const m of tags) out.push({ t: Number(m[1]) * 60 + Number(m[2]), text });
    }
    return out.sort((x, y) => x.t - y.t);
  };
  const lrclib = (a) => {
    const artist = a.media_artist, title = a.media_title;
    if (!artist || !title) return Promise.resolve(null);
    const d = Math.round(a.media_duration || 0);
    const key = `${artist}|${title}|${d}`.toLowerCase();
    if (!LRC.has(key)) {
      if (LRC.size > 60) LRC.delete(LRC.keys().next().value);
      LRC.set(key, (async () => {
        let j = null;
        try {
          const q = new URLSearchParams({ artist_name: artist, track_name: title });
          if (a.media_album_name) q.set('album_name', a.media_album_name);
          if (d) q.set('duration', d);
          const r = await fetch(`https://lrclib.net/api/get?${q}`);
          if (r.ok) j = await r.json();
        } catch (e) {}
        if (!j || (!j.syncedLyrics && !j.instrumental)) {
          try {
            const r = await fetch(`https://lrclib.net/api/search?${new URLSearchParams({ track_name: title, artist_name: artist })}`);
            if (r.ok) {
              const list = (await r.json()).filter((x) => x.syncedLyrics);
              list.sort((x, y) => Math.abs((x.duration || 0) - d) - Math.abs((y.duration || 0) - d));
              const best = list[0];
              if (best && (!d || Math.abs((best.duration || 0) - d) <= 8)) j = best;
              
            }
          } catch (e) { if (!j) { LRC.delete(key); return null; } }
        }
        if (!j) return null;
        return { lines: j.syncedLyrics ? parseLrc(j.syncedLyrics) : null, plain: j.plainLyrics || null, instrumental: !!j.instrumental };
      })());
    }
    return LRC.get(key);
  };
  const LIVE = ['playing', 'paused', 'buffering', 'on', 'idle'];
  const RANK = { playing: 0, buffering: 1, paused: 2, on: 3, idle: 4 };
  let lsOK = true; const ls = { get(k) { try { return lsOK ? localStorage.getItem(k) : null; } catch (e) { lsOK = false; return null; } }, set(k, v) { try { lsOK && localStorage.setItem(k, v); } catch (e) { lsOK = false; } } };

  const CSS = `
:host{display:block}
ha-card{position:relative;overflow:hidden;padding:18px 18px 16px;box-sizing:border-box;height:100%;isolation:isolate;container-type:inline-size}
.glow{display:var(--m53-glow,block);position:absolute;inset:-30%;z-index:-1;background-size:cover;background-position:center;filter:blur(46px) saturate(1.7);opacity:0;transition:opacity .8s ease,background-image .8s ease;pointer-events:none}
.glow.on{opacity:var(--m53-media-glow,.42)}
.ic{width:22px;height:22px;fill:currentColor;stroke:none;flex:none}
button{all:unset;box-sizing:border-box;cursor:pointer;-webkit-tap-highlight-color:transparent;display:inline-flex;align-items:center;justify-content:center;color:inherit;transition:background-color .2s,transform .18s var(--m53-ease,cubic-bezier(.2,.8,.2,1)),opacity .2s}
button{position:relative}
button:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}
button:active{transform:scale(.92)}
button[disabled]{opacity:.32;pointer-events:none}
.top{display:flex;align-items:center;gap:10px}
.eyebrow{flex:1;min-width:0;font-size:11px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:var(--secondary-text-color);display:flex;align-items:center;gap:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.eq{display:inline-flex;gap:2px;align-items:flex-end;height:10px}
.eq i{width:2px;border-radius:1px;background:var(--primary-color);height:30%;transition:height .3s}
.playing .eq i{animation:eq 1s ease-in-out infinite alternate;animation-play-state:var(--m53-play,running)}
.eq i:nth-child(2){animation-delay:-.35s!important}.eq i:nth-child(3){animation-delay:-.7s!important}
@keyframes eq{0%{height:25%}100%{height:100%}}
.loader{--color-1:var(--m53-spinner-color,currentColor);--size:1px;width:calc(48 * var(--size));height:calc(48 * var(--size));border:calc(5 * var(--size)) solid var(--color-1);border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;flex:none;animation:rotation 1s linear infinite}
@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
button>.loader{display:none;position:absolute;left:50%;top:50%;margin:calc(-24 * var(--size)) 0 0 calc(-24 * var(--size))}
button.busy>.loader{display:block}
button.busy>.ic,.pp.busy .ic{opacity:0!important}
.wake>.loader{position:static;margin:0}
.wake.busy>.ic{display:none}
.wake.busy>.loader{display:inline-block}
.load{display:flex;align-items:center;gap:10px}
.round{width:38px;height:38px;border-radius:50%;background:color-mix(in srgb,currentColor 8%,transparent)}
.round:hover{background:color-mix(in srgb,currentColor 14%,transparent)}
.pwr.lit{color:var(--primary-color)}
.chips{display:flex;gap:6px;margin:12px -18px 0;padding:0 18px;overflow-x:auto;scrollbar-width:none;-webkit-mask-image:linear-gradient(90deg,transparent,#000 18px,#000 calc(100% - 18px),transparent)}
.chips::-webkit-scrollbar{display:none}
.chip{height:32px;padding:0 13px;border-radius:999px;font-size:13px;font-weight:550;gap:7px;white-space:nowrap;background:color-mix(in srgb,currentColor 7%,transparent);color:var(--secondary-text-color)}
.chip .dot{width:6px;height:6px;border-radius:50%;background:currentColor;opacity:.35}
.chip.live .dot{background:var(--primary-color);opacity:1;box-shadow:0 0 0 3px color-mix(in srgb,var(--primary-color) 25%,transparent)}
.chip.sel{background:color-mix(in srgb,currentColor 16%,transparent);color:var(--primary-text-color)}
.now{display:flex;align-items:center;gap:14px;margin-top:16px;min-height:72px}
.art{display:none;flex:none;height:var(--art-h,72px);transition:transform .5s var(--m53-ease,cubic-bezier(.2,.8,.2,1))}
.art.loading{display:flex;align-items:center;justify-content:center;width:var(--art-h,72px);border-radius:var(--art-r,14px);background:color-mix(in srgb,currentColor 8%,transparent);color:var(--secondary-text-color)}
.art .loader{display:none}.art.loading .loader{display:block}.art.loading img{display:none}
.art.show{display:block;animation:artin .45s var(--m53-ease,cubic-bezier(.2,.8,.2,1))}
@keyframes artin{from{opacity:0;transform:scale(.94)}}
.art img{display:block;height:100%;width:auto;max-width:none;object-fit:cover;border-radius:var(--art-r,14px);box-shadow:0 6px 18px rgba(0,0,0,.25)}
.art.square img{aspect-ratio:1}
.art.wide img{aspect-ratio:16/9;--art-r-d:10px;border-radius:var(--art-r,10px)}
.art.poster img{aspect-ratio:2/3;border-radius:var(--art-r,8px)}
.art.logo{height:var(--logo-h,40px)}
.art.logo img{object-fit:contain;max-width:140px;border-radius:0;box-shadow:none;filter:drop-shadow(0 2px 8px rgba(0,0,0,.3))}
.playing .art.square{transform:scale(1.03)}
.meta{flex:1;min-width:0}
.title{font-size:20px;font-weight:650;letter-spacing:-.015em;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sub{margin-top:3px;font-size:14px;color:var(--secondary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bar{margin-top:14px;display:none}
.bar.on{display:block}
.track{position:relative;height:6px;border-radius:3px;background:color-mix(in srgb,currentColor 12%,transparent);cursor:pointer;touch-action:none}
.track.ro{cursor:default}
.fill{position:absolute;left:0;top:0;bottom:0;border-radius:inherit;background:var(--primary-text-color);width:0}
.track:not(.ro):hover .fill::after,.track.drag .fill::after{content:'';position:absolute;right:-6px;top:50%;width:12px;height:12px;margin-top:-6px;border-radius:50%;background:var(--primary-text-color)}
.times{display:flex;justify-content:space-between;margin-top:6px;font-size:11.5px;color:var(--secondary-text-color);font-variant-numeric:tabular-nums}
.ctl{display:flex;align-items:center;gap:6px;margin-top:14px}
.tp{width:44px;height:44px;border-radius:50%}
.tp:hover{background:color-mix(in srgb,currentColor 9%,transparent)}
.pp{width:52px;height:52px;border-radius:50%;background:var(--primary-text-color);color:var(--card-background-color,#111);position:relative}
.pp .ic{position:absolute;transition:opacity .2s,transform .25s var(--m53-ease,cubic-bezier(.2,.8,.2,1))}
.pp .i-play{transform:translateX(1px)}
.pp:not(.is) .i-pause,.pp.is .i-play{opacity:0;transform:scale(.6)}
.vol{flex:1;display:flex;align-items:center;justify-content:flex-end;gap:2px;min-width:0}
.vol .tp{width:40px;height:40px}
.vtrack{flex:1;max-width:150px;height:6px;border-radius:3px;background:color-mix(in srgb,currentColor 12%,transparent);position:relative;cursor:pointer;touch-action:none;margin:0 6px}
.vfill{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--secondary-text-color)}
.rtoggle{gap:6px;height:36px;padding:0 12px 0 10px;border-radius:999px;font-size:13px;font-weight:550;background:color-mix(in srgb,currentColor 8%,transparent);margin-left:4px}
.rtoggle .i-chev{width:16px;height:16px;transition:transform .3s var(--m53-ease,cubic-bezier(.2,.8,.2,1))}
.open .rtoggle .i-chev{transform:rotate(180deg)}
.open .rt{background:color-mix(in srgb,var(--primary-color) 28%,transparent)}
.remote{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s var(--m53-ease,cubic-bezier(.2,.8,.2,1))}
.open .remote{grid-template-rows:1fr}
.remote>div{overflow:hidden;min-height:0}
.rbody{display:flex;gap:16px;align-items:center;padding-top:16px}
.pad{position:relative;width:min(100%,196px);aspect-ratio:1;flex:none;border-radius:34px;background:color-mix(in srgb,currentColor 7%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,currentColor 8%,transparent);touch-action:none;user-select:none;-webkit-user-select:none;overflow:hidden}
.pad .arr{position:absolute;width:44px;height:44px;border-radius:50%;color:var(--secondary-text-color)}
.pad .arr:hover{color:var(--primary-text-color)}
.pad .u{top:4px;left:50%;margin-left:-22px}.pad .d{bottom:4px;left:50%;margin-left:-22px}
.pad .l{left:4px;top:50%;margin-top:-22px}.pad .r{right:4px;top:50%;margin-top:-22px}
.pad .u .ic{transform:rotate(180deg)}.pad .l .ic{transform:rotate(90deg)}.pad .r .ic{transform:rotate(-90deg)}
.pad .ok{position:absolute;left:50%;top:50%;width:64px;height:64px;margin:-32px 0 0 -32px;border-radius:50%;background:color-mix(in srgb,currentColor 10%,transparent);font-size:13px;font-weight:650;letter-spacing:.04em}
.pad .ripple{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px;border-radius:50%;background:var(--primary-text-color);opacity:.25;pointer-events:none;animation:rip .45s ease-out forwards}
@keyframes rip{to{transform:scale(3.2);opacity:0}}
.pad.nudge-up{animation:nu .25s}.pad.nudge-down{animation:nd .25s}.pad.nudge-left{animation:nl .25s}.pad.nudge-right{animation:nr .25s}
@keyframes nu{50%{transform:translateY(-3px)}}@keyframes nd{50%{transform:translateY(3px)}}@keyframes nl{50%{transform:translateX(-3px)}}@keyframes nr{50%{transform:translateX(3px)}}
.side{flex:1;min-width:0;display:flex;flex-direction:column;gap:10px}
.keys{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.key{height:46px;border-radius:14px;background:color-mix(in srgb,currentColor 7%,transparent);flex-direction:column;gap:2px;font-size:10.5px;color:var(--secondary-text-color)}
.key .ic{width:20px;height:20px;color:var(--primary-text-color)}
.key:hover{background:color-mix(in srgb,currentColor 12%,transparent)}
.apps{display:flex;flex-wrap:wrap;gap:6px}
@container (max-width:520px){.rbody{flex-direction:column;align-items:stretch;gap:14px}.pad{width:min(100%,220px);margin:0 auto}.apps{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;margin:0 -18px;padding:0 18px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 18px,#000 calc(100% - 18px),transparent)}.apps::-webkit-scrollbar{display:none}.hint{text-align:center}}
.app{height:30px;padding:0 11px;border-radius:999px;font-size:12.5px;font-weight:550;background:color-mix(in srgb,currentColor 7%,transparent);white-space:nowrap}
.app.cur{background:color-mix(in srgb,var(--primary-color) 26%,transparent)}
.app:hover{background:color-mix(in srgb,currentColor 13%,transparent)}
.hint{font-size:11px;color:var(--secondary-text-color)}
.lyr{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s var(--m53-ease,cubic-bezier(.2,.8,.2,1))}
.lyrics-open .lyr{grid-template-rows:1fr}
.lyr>div{overflow:hidden;min-height:0}
.lbox{margin-top:14px;max-height:var(--m53-lyrics-h,300px);overflow-y:auto;scrollbar-width:none;overscroll-behavior:contain;scroll-behavior:smooth;padding:14px 0 44px;-webkit-mask-image:linear-gradient(transparent,#000 30px,#000 calc(100% - 52px),transparent);mask-image:linear-gradient(transparent,#000 30px,#000 calc(100% - 52px),transparent)}
.lbox::-webkit-scrollbar{display:none}
.ltext{font-size:18px;font-weight:620;line-height:1.42;letter-spacing:-.01em;color:var(--primary-text-color);overflow-wrap:anywhere}
.ltext .l{min-height:1.42em}
.ltext .gap{height:.7em}
.ltext .sec{margin:16px 0 4px;font-size:11px;font-weight:600;line-height:1.3;letter-spacing:.09em;text-transform:uppercase;color:var(--secondary-text-color)}
.ltext .sec:first-child{margin-top:0}
.ltext .msg{font-size:15px;font-weight:500;color:var(--secondary-text-color)}
.lbox{position:relative}
.ltext.synced{font-size:20px;line-height:1.35;padding-right:6%}
.ltext.synced .l{padding:4px 0;opacity:.4;cursor:pointer;transform-origin:left center;transition:opacity .35s ease,transform .45s var(--m53-ease,cubic-bezier(.2,.8,.2,1)),filter .35s ease}
.ltext.synced .l.past{opacity:.24}
.ltext.synced .l.cur{opacity:1;transform:scale(1.04)}
.ltext.synced .l:hover{opacity:.75}
.ltext.synced .l.brk{letter-spacing:.35em;font-size:14px}
.ltext.synced .l.brk.cur{animation:brk 1.4s ease-in-out infinite;animation-play-state:var(--m53-play,running)}
@keyframes brk{50%{opacity:.45}}
.lyrics-open .ly{background:color-mix(in srgb,var(--primary-color) 28%,transparent)}
.ly{display:none}.ly.on{display:inline-flex}
.lb{display:none}.lb.on{display:inline-flex}
.lib-open .lb{background:color-mix(in srgb,var(--primary-color) 28%,transparent)}
.tp.sm{width:36px;height:36px;color:var(--secondary-text-color)}
.tp.sm .ic{width:20px;height:20px}
.tp.act{color:var(--primary-color)}
#rep{position:relative}
.vtrack{min-width:44px}
.libp{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s var(--m53-ease,cubic-bezier(.2,.8,.2,1))}
.lib-open .libp{grid-template-rows:1fr}
.libp>div{overflow:hidden;min-height:0}
.bhead{display:flex;align-items:center;gap:4px;margin-top:14px}
.bhead.hide{display:none}
.btitle{flex:1;min-width:0;font-size:15px;font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#bback.hide{visibility:hidden}
.bbody{max-height:var(--m53-library-h,360px);overflow-y:auto;scrollbar-width:none;overscroll-behavior:contain;padding:8px 0 10px}
.bbody::-webkit-scrollbar{display:none}
.bgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(98px,1fr));gap:14px 12px}
.it{display:flex!important;flex-direction:column;align-items:stretch!important;gap:6px;text-align:left;min-width:0}
.th{position:relative;aspect-ratio:1;border-radius:12px;background:color-mix(in srgb,currentColor 8%,transparent) center/cover no-repeat;box-shadow:0 4px 14px rgba(0,0,0,.22);display:flex;align-items:center;justify-content:center;color:var(--secondary-text-color);transition:transform .25s var(--m53-ease,cubic-bezier(.2,.8,.2,1))}
.th .ic{width:26px;height:26px}
.th.pic .ic{display:none}
.it.mc-artist .th{border-radius:50%}
.it.mc-app .th,.it.mc-directory .th,.it.mc-app .th.pic{background-size:contain;background-origin:content-box;padding:16%;box-sizing:border-box}
.it:hover .th{transform:translateY(-2px)}
.nm{font-size:12.5px;font-weight:600;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.pl{position:absolute;right:6px;bottom:6px;width:32px;height:32px;border-radius:50%;background:var(--primary-color);color:#fff;opacity:0;transform:translateY(4px);transition:opacity .2s,transform .2s;box-shadow:0 4px 12px rgba(0,0,0,.3)}
.pl .ic{width:16px;height:16px;display:block!important;transform:translateX(1px)}
.it:hover .pl,.it:focus-within .pl{opacity:1;transform:none}
@media (hover:none){.pl{opacity:.95;transform:none}}
.blist{display:flex;flex-direction:column;gap:2px}
.row{display:flex!important;justify-content:flex-start!important;gap:12px;height:48px;padding:0 8px;border-radius:12px;text-align:left}
.row:hover{background:color-mix(in srgb,currentColor 7%,transparent)}
.row .ri{position:relative;width:34px;height:34px;flex:none;border-radius:8px;background:color-mix(in srgb,currentColor 8%,transparent) center/cover no-repeat;display:flex;align-items:center;justify-content:center;color:var(--secondary-text-color)}
.row .ri .ic{width:19px;height:19px}
.row .ri.pic .ic{display:none}
.row .rt2{flex:1;min-width:0;font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.row .go{color:var(--secondary-text-color);width:20px;height:20px}
.busyov{display:none;position:absolute;inset:0;align-items:center;justify-content:center;border-radius:inherit;background:rgba(0,0,0,.5);--m53-spinner-color:#fff}
.busy>.th>.busyov,.busy>.ri>.busyov{display:flex}
.bmsg{padding:18px 4px;font-size:14px;color:var(--secondary-text-color)}
.bsearch{display:flex;align-items:center;gap:8px;height:40px;margin-top:14px;padding:0 4px 0 12px;border-radius:12px;background:color-mix(in srgb,currentColor 8%,transparent);color:var(--secondary-text-color);cursor:text}
.bsearch.hide{display:none}
.bsearch .ic{width:18px;height:18px}
.bsearch input{all:unset;flex:1;min-width:0;font:inherit;font-size:14px;color:var(--primary-text-color)}
.bsearch input::placeholder{color:var(--secondary-text-color)}
.bsearch input::-webkit-search-cancel-button{display:none}
#bqx{visibility:hidden}.bsearch.has #bqx{visibility:visible}
.bsec{margin:12px 0 8px;font-size:11px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:var(--secondary-text-color)}
.bsec:first-child{margin-top:2px}
.row .txt{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center}
.row .txt .rt2{flex:none}
.row .rsub{font-size:12px;color:var(--secondary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.qa{display:inline-flex;align-items:center;justify-content:center;flex:none;position:relative;width:32px;height:32px;border-radius:50%;cursor:pointer;color:var(--secondary-text-color);transition:background-color .2s,color .2s,opacity .2s,transform .2s}
.qa:hover{background:color-mix(in srgb,currentColor 14%,transparent);color:var(--primary-text-color)}
.qa .ic{display:block!important;width:18px;height:18px}
.qa .i-ok,.qa .i-err{display:none!important}
.qa .loader{display:none}
.qa.busy .loader{display:block}
.qa.busy .i-q,.qa.ok .i-q,.qa.err .i-q{display:none!important}
.qa.ok .i-ok,.qa.err .i-err{display:block!important}
.qa.ok{color:var(--primary-color)}
.qa.err{color:var(--error-color,#db4437)}
.th .qa{position:absolute;left:6px;bottom:6px;background:rgba(0,0,0,.55);color:#fff;opacity:0;transform:translateY(4px);box-shadow:0 4px 12px rgba(0,0,0,.3);--m53-spinner-color:#fff}
.th .qa:hover{background:rgba(0,0,0,.75);color:#fff}
.th .qa.ok{background:var(--primary-color)}
.th .qa.err{background:var(--error-color,#db4437);color:#fff}
.it:hover .qa,.it:focus-within .qa,.th .qa.busy,.th .qa.ok,.th .qa.err{opacity:1;transform:none}
@media (hover:none){.th .qa{opacity:.95;transform:none}}
.off .bar,.off .ctl .tp,.off .ctl .pp,.off .vol{display:none}
.wake{display:none;height:40px;padding:0 16px;border-radius:999px;gap:8px;font-size:14px;font-weight:600;background:var(--primary-text-color);color:var(--card-background-color,#111)}
.off .wake{display:inline-flex}
.ctl .spacer{flex:1}
@media (max-width:460px){.rbody{flex-direction:column;align-items:stretch}.pad{margin:0 auto}}
@media (prefers-reduced-motion:reduce){*:not(.loader){animation:none!important;transition:none!important}}
`;

  function autoPlayers(hass, max) {
    const reg = hass.entities || {};
    const rank = (s) => (s.state === 'playing' ? 0 : s.state === 'paused' ? 1 : s.state === 'unavailable' ? 3 : 2);
    return Object.values(hass.states)
      .filter((s) => s.entity_id.startsWith('media_player.') && !(reg[s.entity_id] && (reg[s.entity_id].hidden || reg[s.entity_id].entity_category)))
      .sort((a, b) => rank(a) - rank(b))
      .slice(0, max).map((s) => ({ entity: s.entity_id }));
  }
  function groupResults(items) {
    const kinds = [['track', 'Songs', true], ['artist', 'Artists'], ['album', 'Albums'], ['playlist', 'Playlists'], ['podcast', 'Podcasts'], ['radio', 'Radio']];
    const isLib = (c) => (/^library:/.test(String(c.media_content_id)) ? 1 : 0);
    const seen = new Set();
    const keep = new Set([...items].sort((a, b) => isLib(b) - isLib(a)).filter((c) => { const k = c.media_class + '|' + String(c.title).toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true; }));
    const kept = items.filter((c) => keep.has(c));
    const groups = kinds.map(([k, title, list]) => ({ title, list: !!list, items: kept.filter((c) => c.media_class === k) }));
    const other = kept.filter((c) => !kinds.some(([k]) => k === c.media_class));
    if (other.length) groups.push({ title: 'More', items: other });
    return groups;
  }

  class M53MediaCard extends HTMLElement {
    static getStubConfig(hass) {
      return { players: autoPlayers(hass, 3) };
    }
    static getConfigForm() {
      const mp = { entity: { filter: { domain: 'media_player' } } };
      return {
        schema: [
          {
            name: 'players',
            selector: {
              object: {
                multiple: true,
                label_field: 'name',
                description_field: 'entity',
                fields: {
                  entity: { label: 'Player', required: true, selector: mp },
                  name: { label: 'Name on the chip', selector: { text: {} } },
                  remote: { label: 'Remote (optional, found automatically)', selector: { entity: { filter: { domain: 'remote' } } } },
                  music_player: { label: 'Music Assistant player for library and search (optional)', selector: mp },
                },
              },
            },
          },
          {
            type: 'grid',
            name: '',
            schema: [
              { name: 'hide_lyrics', selector: { boolean: {} } },
              { name: 'hide_library', selector: { boolean: {} } },
              { name: 'hide_search', selector: { boolean: {} } },
              { name: 'hide_volume', selector: { boolean: {} } },
              { name: 'hide_progress', selector: { boolean: {} } },
              { name: 'hide_apps', selector: { boolean: {} } },
              { name: 'hide_queue', selector: { boolean: {} } },
            ],
          },
        ],
        computeLabel: (s) => ({
          players: 'Players (leave empty to pick automatically)',
          hide_lyrics: 'Hide lyrics', hide_library: 'Hide library', hide_search: 'Hide search', hide_volume: 'Hide volume', hide_progress: 'Hide progress bar', hide_apps: 'Hide app shortcuts', hide_queue: 'Hide add to queue',
        })[s.name],
        computeHelper: (s) => (s.name === 'players' ? 'Drag to reorder the chips. The card follows whatever is playing.' : undefined),
      };
    }
    setConfig(c) {
      c = { ...(c || {}) };
      const HIDE = { hide_lyrics: 'lyrics', hide_library: 'show_library', hide_search: 'search', hide_volume: 'show_volume', hide_progress: 'show_progress', hide_apps: 'show_apps', hide_queue: 'show_queue' };
      for (const [h, k] of Object.entries(HIDE)) if (c[h] === true) c[k] = false;
      this._config = c;
      const list = Array.isArray(c.players) && c.players.length ? c.players : Array.isArray(c.entities) && c.entities.length ? c.entities : c.entity ? [c.entity] : [];
      this._auto = !list.length;
      this._players = list.map((p) => (typeof p === 'string' ? { entity: p } : p)).filter((p) => p && p.entity);
      this._sel = null; this._manual = false;
      this._open = c.remote_open === true || ls.get(this._lsKey('open')) === '1';
      this._lyOpen = !this._open && ls.get(this._lsKey('lyrics')) === '1';
      this._libOpen = false; this._bstack = null;
      if (this._root && this._players.length) this._build();
    }
    _opt(k, d) { const p = this._p || {}; return p[k] ?? (this._config || {})[k] ?? d; }
    _lsKey(k) { return `m53-media:${this._players.map((p) => p.entity).join(',')}:${k}`; }
    getCardSize() { return this._open ? 8 : 4; }
    getGridOptions() { return { columns: 12, min_columns: 6, rows: 'auto' }; }
    set hass(h) {
      this._hass = h;
      if (this._auto && !this._players.length) {
        this._players = autoPlayers(h, 6);
        if (!this._players.length) { if (!this._root) this._root = this.attachShadow({ mode: 'open' }); this._root.innerHTML = '<ha-card style="padding:16px">No media players found.</ha-card>'; return; }
        this._open = ls.get(this._lsKey('open')) === '1'; this._lyOpen = !this._open && ls.get(this._lsKey('lyrics')) === '1';
        if (this._root) { this._root.innerHTML = ''; this._build(); }
      }
      if (!this._root) { this._root = this.attachShadow({ mode: 'open' }); this._build(); }
      this._pick(); this._render();
    }
    connectedCallback() { this._tick = setInterval(() => { if (!document.hidden) this._progress(); }, 1000); this._stick = setInterval(() => { if (!document.hidden && this._lyOpen) this._sync(); }, 200); }
    disconnectedCallback() { clearInterval(this._tick); clearInterval(this._stick); clearInterval(this._rep); }

    get _p() { return this._players.find((p) => p.entity === this._sel) || this._players[0]; }
    _mp(p = this._p) { const m = p.music_player || (this._config || {}).music_player; return m && this._hass && this._hass.states[m] ? m : p.entity; }
    _st(p = this._p) { return this._hass && this._hass.states[p.entity]; }
    _remote(p = this._p) {
      if (p.remote === false) return null;
      const id = p.remote || p.entity.replace('media_player.', 'remote.');
      return this._hass.states[id] ? id : null;
    }
    _lyricsId(p = this._p) {
      const lyr = p.lyrics ?? (this._config || {}).lyrics;
      if (lyr === false || !this._hass) return null;
      const id = typeof lyr === 'string' ? lyr : `sensor.genius_lyrics_${p.entity.split('.')[1]}_lyrics`;
      return this._hass.states[id] ? id : null;
    }
    _lyrics(s, off) {
      const a = s.attributes, src = this._opt('lyrics_source', 'auto');
      const box = this.$('ltext');
      const music = ['music', 'playlist'].includes(a.media_content_type);
      const can = src !== false && this._opt('lyrics', true) !== false && !off && music && !!a.media_title;
      this.$('ly').classList.toggle('on', can);
      this._root.querySelector('ha-card').classList.toggle('lyrics-open', this._lyOpen && can);
      if (!can) { this._mode = null; return; }
      const songKey = `${s.entity_id}|${a.media_artist}|${a.media_title}`;
      if (src !== 'genius' && this._lrcKey !== songKey) {
        this._lrcKey = songKey; this._lrc = undefined;
        lrclib(a).then((r) => { if (this._lrcKey === songKey) { this._lrc = r; this._render(); } });
      }
      const lid = src === 'lrclib' ? null : this._lyricsId();
      const gs = lid && this._hass.states[lid];
      const gtxt = gs && gs.attributes.media_lyrics;
      const gOK = gtxt && gtxt !== 'Lyrics not found';
      const lrc = src === 'genius' ? null : this._lrc;
      let mode, body;
      if (lrc && lrc.lines && lrc.lines.length) { mode = 'synced'; body = lrc.lines; }
      else if (lrc && lrc.instrumental) { mode = 'msg'; body = 'Instrumental'; }
      else if (lrc === undefined) { mode = 'msg'; body = 'Finding lyrics…'; }
      else if (gOK) { mode = 'plain'; body = gtxt; }
      else if (gs && gs.state === 'on' && !gtxt) { mode = 'msg'; body = 'Finding lyrics…'; }
      else if (lrc && lrc.plain) { mode = 'plain'; body = lrc.plain; }
      else { mode = 'msg'; body = 'No lyrics found for this song.'; }
      const sig = `${songKey}|${mode}|${mode === 'synced' ? body.length : String(body).length}`;
      if (box.dataset.sig === sig) return;
      const songChanged = box.dataset.song !== songKey;
      box.dataset.sig = sig; box.dataset.song = songKey;
      this._mode = mode; this._cur = -1; this._lineEls = null;
      box.className = `ltext ${mode}`;
      if (mode === 'msg') box.innerHTML = body === 'Finding lyrics…' ? `<div class="msg load">${spin(0.4)}${esc(body)}</div>` : `<div class="msg">${esc(body)}</div>`;
      else if (mode === 'synced') {
        box.innerHTML = body.map((l, i) => l.text
          ? `<div class="l" data-i="${i}">${esc(l.text)}</div>`
          : `<div class="l brk" data-i="${i}">• • •</div>`).join('');
        this._lineEls = [...box.children]; this._lineT = body.map((l) => l.t);
      } else {
        const lines = String(body).replace(/\r/g, '').split('\n');
        while (lines.length && !lines[0].trim()) lines.shift();
        box.innerHTML = lines.map((ln) => {
          const t = ln.trim();
          if (!t) return '<div class="gap"></div>';
          const m = t.match(/^\[(.+)\]$/);
          return m ? `<div class="sec">${esc(m[1].replace(/:.*$/, ''))}</div>` : `<div class="l">${esc(t)}</div>`;
        }).join('');
      }
      if (songChanged || mode === 'synced') { const lb = this.$('lbox'); lb.style.scrollBehavior = 'auto'; lb.scrollTop = 0; lb.style.scrollBehavior = ''; if (songChanged) this._lyUser = 0; }
      this._sync(true);
    }
    async _browse(node) {
      const ent = this._mp(); const self = this._p.entity;
      if (!this._bstack || this._bstack.ent !== ent) { this._bstack = []; this._bstack.ent = ent; }
      if (node) this._bstack.push(node); else { this._bstack.length = 0; this._bstack.push({ id: null, type: null, title: 'Library' }); }
      const cur = this._bstack[this._bstack.length - 1];
      const root = cur.id == null;
      this._bsaved = null;
      const body = this.$('bbody'); const token = (this._btok = (this._btok || 0) + 1);
      this._searchMode().then((m) => {
        if (this._p.entity !== self) return;
        this.$('bsw').classList.toggle('hide', !m);
        this.$('bq').placeholder = m && m.kind === 'spotify' ? 'Search Spotify' : 'Search music';
        if (root && !m && token === this._btok) body.innerHTML = '<div class="bmsg">Search isn\u2019t available for this player.</div>';
      });
      this.$('bhead').classList.toggle('hide', root);
      this.$('btitle').textContent = cur.title || '';
      this.$('bback').classList.toggle('hide', this._bstack.length < 2);
      if (root) {
        this._bitems = [];
        const q = this.$('bq').value.trim();
        if (q.length >= 2) this._search(q);
        else body.innerHTML = '<div class="bmsg">Search for a song, artist, album or playlist.</div>';
        return;
      }
      body.innerHTML = `<div class="bmsg load">${spin(0.4)}Loading\u2026</div>`;
      let res;
      try {
        const msg = { type: 'media_player/browse_media', entity_id: ent, media_content_id: cur.id, media_content_type: cur.type };
        res = await this._hass.callWS(msg);
      } catch (e) {
        if (token === this._btok) body.innerHTML = `<div class="bmsg">Couldn't open this. ${esc((e && e.message) || '')}</div>`;
        return;
      }
      if (token !== this._btok) return;
      if (res.title) this.$('btitle').textContent = res.title;
      const items = (res.children || []).filter((c) => c.can_expand || c.can_play);
      this._bitems = items;
      if (!items.length) { body.innerHTML = '<div class="bmsg">Nothing here yet.</div>'; return; }
      body.innerHTML = this._itemsHtml(items);
      body.scrollTop = 0;
    }
    async _searchMode() {
      const mp = { entity: this._mp() };
      const s = this._st(mp); if (!s || this._opt('search', true) === false) return null;
      if (has(s, F.SEARCH)) return { kind: 'native' };
      if (this._family(mp) !== 'spotify') return null;
      if (this._maEntry === undefined) {
        this._maEntry = null;
        try { const ce = await this._hass.callWS({ type: 'config_entries/get', domain: 'music_assistant' }); const e = ce.find((x) => x.state === 'loaded'); this._maEntry = e ? e.entry_id : null; } catch (e) {}
      }
      return this._maEntry ? { kind: 'spotify', entry: this._maEntry } : null;
    }
    async _search(q) {
      const body = this.$('bbody'); const token = (this._btok = (this._btok || 0) + 1);
      const drilled = !!this._bstack && this._bstack.length > 1;
      if (drilled) this._bstack.length = 1;
      this.$('bhead').classList.add('hide');
      if (!q || q.length < 2) {
        if (this._bsaved) { body.innerHTML = this._bsaved.html; this._bitems = this._bsaved.items; this._bsaved = null; }
        else this._browse(null);
        return;
      }
      if (!this._bsaved && !drilled) this._bsaved = { html: body.innerHTML, items: this._bitems };
      body.innerHTML = `<div class="bmsg load">${spin(0.4)}Searching\u2026</div>`;
      const mode = await this._searchMode();
      if (token !== this._btok) return;
      if (!mode) { body.innerHTML = '<div class="bmsg">Search isn\u2019t available for this player.</div>'; return; }
      const ent = this._mp(); let groups = [];
      try {
        if (mode.kind === 'native') {
          const r = await this._hass.callWS({ type: 'execute_script', sequence: [{ action: 'media_player.search_media', target: { entity_id: ent }, data: { search_query: q }, response_variable: 'r' }, { stop: 'done', response_variable: 'r' }] });
          const res = (((r || {}).response || {})[ent] || {}).result || [];
          groups = groupResults(res.filter((c) => c.can_expand || c.can_play));
        } else {
          const r = await this._hass.callWS({ type: 'execute_script', sequence: [{ action: 'music_assistant.search', data: { config_entry_id: mode.entry, name: q, limit: 12, media_type: ['track', 'artist', 'album', 'playlist'] }, response_variable: 'r' }, { stop: 'done', response_variable: 'r' }] });
          const res = (r || {}).response || {};
          const conv = (it, sub) => {
            const m = String(it.uri || '').match(/^spotify[^:]*:\/\/(\w+)\/([A-Za-z0-9]+)$/); if (!m) return null;
            const img = it.image || (it.album && it.album.image) || '';
            return { title: it.name, sub, thumbnail: /^https:/.test(img) ? img : '', media_class: m[1], media_content_id: `spotify:${m[1]}:${m[2]}`, media_content_type: `spotify://${m[1]}`, can_play: true, can_expand: m[1] !== 'track' };
          };
          const names = (it) => (it.artists || []).map((a) => a.name).join(', ');
          groups = [
            { title: 'Songs', list: true, items: (res.tracks || []).map((t) => conv(t, names(t))).filter(Boolean).slice(0, 6) },
            { title: 'Artists', items: (res.artists || []).map((t) => conv(t, '')).filter(Boolean) },
            { title: 'Albums', items: (res.albums || []).map((t) => conv(t, names(t))).filter(Boolean) },
            { title: 'Playlists', items: (res.playlists || []).map((t) => conv(t, '')).filter(Boolean) },
          ];
        }
      } catch (e) {
        if (token === this._btok) body.innerHTML = `<div class="bmsg">Search didn't work. ${esc((e && e.message) || '')}</div>`;
        return;
      }
      if (token !== this._btok) return;
      groups = groups.filter((g) => g.items.length);
      if (!groups.length) { body.innerHTML = `<div class="bmsg">Nothing found for “${esc(q)}”.</div>`; this._bitems = []; return; }
      const all = []; let html = '';
      for (const g of groups) {
        const start = all.length; all.push(...g.items);
        html += `<div class="bsec">${esc(g.title)}</div>` + this._itemsHtml(g.items, start, g.list);
      }
      this._bitems = all; body.innerHTML = html; body.scrollTop = 0;
    }
    _canEnq() {
      const ms = this._st({ entity: this._mp() });
      return !!ms && has(ms, F.ENQUEUE) && ms.state !== 'unavailable' && this._opt('show_queue', true) !== false;
    }
    async _enqueue(c, el) {
      if (el.classList.contains('busy')) return;
      clearTimeout(el._t); el.classList.remove('ok', 'err'); el.classList.add('busy');
      let ok = true;
      try {
        await this._hass.callService('media_player', 'play_media', { entity_id: this._mp(), media_content_id: c.media_content_id, media_content_type: c.media_content_type, enqueue: 'add' });
      } catch (e) { ok = false; console.warn('m53-media-card: add to queue failed', e); }
      el.classList.remove('busy'); el.classList.add(ok ? 'ok' : 'err');
      el._t = setTimeout(() => el.classList.remove('ok', 'err'), 1800);
    }
    _itemsHtml(items, start = 0, forceList = false) {
      const src = (u) => (u && u.startsWith('/') ? this._hass.hassUrl(u) : u);
      const grid = !forceList && items.filter((c) => c.thumbnail).length >= items.length / 2;
      const icon = (c) => svg(c.media_class === 'directory' ? 'folder' : 'note');
      const enq = this._canEnq();
      const qa = (c) => (enq && c.can_play ? `<span class="qa" role="button" aria-label="Add ${esc(c.title)} to queue" title="Add to queue">${svg('queue', 'i-q')}${svg('check', 'i-ok')}${svg('x', 'i-err')}${spin(0.3)}</span>` : '');
      const bg = (c) => (c.thumbnail ? `style="background-image:url('${esc(src(c.thumbnail))}')"` : '');
      if (grid) {
        return `<div class="bgrid">${items.map((c, i) => `<button class="it mc-${esc(c.media_class)}" data-k="${start + i}" title="${esc(c.title)}">
          <span class="th ${c.thumbnail ? 'pic' : ''}" ${bg(c)}>${icon(c)}<span class="busyov">${spin(0.4)}</span>${c.can_play && c.can_expand ? `<span class="pl" role="button" aria-label="Play ${esc(c.title)}">${svg('play')}</span>` : ''}${qa(c)}</span>
          <span class="nm">${esc(c.title)}</span></button>`).join('')}</div>`;
      }
      return `<div class="blist">${items.map((c, i) => `<button class="row" data-k="${start + i}">
          <span class="ri ${c.thumbnail ? 'pic' : ''}" ${bg(c)}>${icon(c)}<span class="busyov">${spin(0.3)}</span></span>
          <span class="txt"><span class="rt2">${esc(c.title)}</span>${c.sub ? `<span class="rsub">${esc(c.sub)}</span>` : ''}</span>${qa(c)}${c.can_expand ? svg('go', 'go') : svg('play', 'go')}</button>`).join('')}</div>`;
    }
    _eff(s) {
      const o = this._opp;
      if (!o) return s.state;
      if (o.ent !== s.entity_id || Date.now() > o.until || s.state === o.st) { this._opp = null; this._hold = null; return s.state; }
      return o.st;
    }
    _setHold(s, pos, play) { this._hold = { ent: s.entity_id, pos, play, at: Date.now(), upd: s.attributes.media_position_updated_at, until: Date.now() + 4000 }; }
    _livePos(s) {
      const a = s.attributes, eff = this._eff(s), h = this._hold;
      if (h) {
        if (h.ent !== s.entity_id || Date.now() > h.until || h.upd !== a.media_position_updated_at) this._hold = null;
        else return h.pos + (h.play ? (Date.now() - h.at) / 1000 : 0);
      }
      let pos = a.media_position || 0;
      if (eff === 'playing' && a.media_position_updated_at) pos += (Date.now() - new Date(a.media_position_updated_at).getTime()) / 1000;
      return pos;
    }
    _pos(s) { return s.attributes.media_position == null ? null : this._livePos(s); }
    _vOver(s) { const o = this._vo; return o && s && o.ent === s.entity_id && Date.now() < o.until ? o : null; }
    _sync(force) {
      if (this._mode !== 'synced' || !this._lyOpen || !this._lineEls) return;
      const s = this._st(); if (!s) return;
      const pos = this._pos(s); if (pos == null) return;
      const t = pos + (Number(this._opt('lyrics_offset', 0)) || 0) + 0.2;
      const T = this._lineT; let i = -1, lo = 0, hi = T.length - 1;
      while (lo <= hi) { const m = (lo + hi) >> 1; if (T[m] <= t) { i = m; lo = m + 1; } else hi = m - 1; }
      if (i === this._cur && !force) return;
      const prev = this._cur; this._cur = i;
      this._lineEls.forEach((el, k) => { el.classList.toggle('cur', k === i); el.classList.toggle('past', k < i); });
      if (this._lyUser && Date.now() < this._lyUser) return;
      const lb = this.$('lbox'), el = this._lineEls[Math.max(0, i)];
      if (!el) return;
      const top = Math.max(0, el.offsetTop - lb.clientHeight * 0.34);
      if (Math.abs(i - prev) > 3 || force) { lb.style.scrollBehavior = 'auto'; lb.scrollTop = top; lb.style.scrollBehavior = ''; }
      else lb.scrollTo({ top, behavior: 'smooth' });
    }
    _lyricsScroll(s, pos, d) {
      if (this._mode !== 'plain' || !this._lyOpen || !d || (this._lyUser && Date.now() < this._lyUser)) return;
      const lb = this.$('lbox'); const max = lb.scrollHeight - lb.clientHeight;
      if (max <= 0) return;
      const f = Math.min(1, Math.max(0, (pos / d - 0.06) / 0.86));
      lb.scrollTop = Math.round(f * max);
    }
    _family(p = this._p) {
      if (p.type) return p.type;
      const r = this._remote(p); const ent = this._hass.entities || {};
      return (r && ent[r] && ent[r].platform) || (ent[p.entity] && ent[p.entity].platform) || '';
    }
    _name(p) { const s = this._st(p); return p.name || (s && s.attributes.friendly_name) || p.entity; }
    _live(s) { return !!s && LIVE.includes(s.state) && s.state !== 'idle'; }
    _call(domain, svc, data = {}) {
      const p = this._hass.callService(domain, svc, data);
      if (p && p.catch) p.catch(() => { this._opp = null; this._hold = null; this._vo = null; this._pendDone(); if (this._render) this._render(); });
      return p;
    }
    _key(k) {
      const r = this._remote(); const map = KEYS[this._family()];
      if (!r || !map || !map[k]) return;
      if (navigator.vibrate) try { navigator.vibrate(8); } catch (e) {}
      this._call('remote', 'send_command', { entity_id: r, command: map[k] });
    }
    _pick() {
      if (this._manual && this._players.some((p) => p.entity === this._sel)) return;
      if (this._sel && this._players.some((p) => p.entity === this._sel)) {
        const cs = this._st({ entity: this._sel });
        if (cs && (cs.state === 'playing' || cs.state === 'buffering' || (this._pnd && this._pnd.ent === this._sel))) return;
      }
      const saved = ls.get(this._lsKey('sel'));
      let best = null, br = 99;
      for (const p of this._players) {
        const s = this._st(p); if (!s) continue;
        const r = RANK[s.state] ?? 99;
        if (r < br) { br = r; best = p.entity; }
      }
      this._sel = (br <= 2 && best) || (saved && this._players.some((p) => p.entity === saved) ? saved : null) || best || this._players[0].entity;
    }

    _build() {
      const r = this._root;
      r.innerHTML = `<style>${CSS}</style>
<ha-card><div class="glow" id="glow"></div>
  <div class="top"><div class="eyebrow"><span class="eq"><i></i><i></i><i></i></span><span id="eb"></span></div>
    <button class="round lb" id="lb" title="Search music">${svg('search')}</button>
    <button class="round ly" id="ly" title="Lyrics">${svg('lyrics')}</button>
    <button class="round rt" id="rt" title="Remote">${svg('remote')}</button>
    <button class="round pwr" id="pwr" title="Power">${svg('power')}${spin(0.4)}</button></div>
  <div class="chips" id="chips" role="tablist"></div>
  <div class="now"><div class="art" id="art">${spin(0.4)}<img id="img" alt="" decoding="async"></div>
    <div class="meta"><div class="title" id="ti"></div><div class="sub" id="su"></div></div></div>
  <div class="bar" id="bar"><div class="track" id="trk"><div class="fill" id="fil"></div></div>
    <div class="times"><span id="t0"></span><span id="t1"></span></div></div>
  <div class="ctl">
    <button class="wake" id="wake">${svg('power')}${spin(0.3)}<span>Turn on</span></button>
    <button class="tp sm" id="shuf" title="Shuffle">${svg('shuffle')}</button>
    <button class="tp" id="prev" title="Previous">${svg('prev')}${spin(0.4)}</button>
    <button class="pp" id="pp" title="Play/Pause">${svg('play', 'i-play')}${svg('pause', 'i-pause')}${spin(0.4)}</button>
    <button class="tp" id="next" title="Next">${svg('next')}${spin(0.4)}</button>
    <button class="tp sm" id="rep" title="Repeat">${svg('repeat')}</button>
    <div class="vol" id="vol"></div>
  </div>
  <div class="remote"><div><div class="rbody">
    <div class="pad" id="pad">
      <button class="arr u" data-k="up" title="Up">${svg('chev')}</button>
      <button class="arr d" data-k="down" title="Down">${svg('chev')}</button>
      <button class="arr l" data-k="left" title="Left">${svg('chev')}</button>
      <button class="arr r" data-k="right" title="Right">${svg('chev')}</button>
      <button class="ok" data-k="ok" title="Select">OK</button>
    </div>
    <div class="side">
      <div class="keys">
        <button class="key" data-k="back">${svg('back')}<span>Back</span></button>
        <button class="key" data-k="home">${svg('home')}<span>Home</span></button>
        <button class="key" data-k="menu">${svg('menu')}<span>Menu</span></button>
      </div>
      <div class="apps" id="apps"></div>
      <div class="hint">Swipe on the pad to move, tap to select.</div>
    </div>
  </div></div></div>
  <div class="lyr"><div><div class="lbox" id="lbox"><div class="ltext" id="ltext"></div></div></div></div>
  <div class="libp"><div>
    <div class="bhead hide" id="bhead"><button class="tp sm" id="bback" title="Back">${svg('back2')}</button><div class="btitle" id="btitle"></div></div>
    <label class="bsearch hide" id="bsw">${svg('search')}<input id="bq" type="search" placeholder="Search" autocomplete="off" spellcheck="false" enterkeyhint="search"><button class="tp sm" id="bqx" title="Clear">${svg('x')}</button></label>
    <div class="bbody" id="bbody"></div>
  </div></div>
</ha-card>`;
      const $ = (id) => r.getElementById(id); this.$ = $;
      $('chips').addEventListener('click', (e) => {
        const b = e.target.closest('[data-e]'); if (!b) return;
        this._sel = b.dataset.e; this._manual = true; ls.set(this._lsKey('sel'), this._sel); this._render(true);
      });
      $('pwr').onclick = () => this._power();
      $('wake').onclick = () => this._power(true);
      $('pp').onclick = () => {
        const s = this._st(); if (!s) return;
        const eff = this._eff(s), playing = eff === 'playing' || eff === 'buffering';
        const pos = this._pos(s);
        this._opp = { ent: s.entity_id, st: playing ? 'paused' : 'playing', until: Date.now() + 4000 };
        if (pos != null) this._setHold(s, pos, !playing);
        this._pend('pp', 4000);
        const svc = (playing ? has(s, F.PAUSE) : has(s, F.PLAY)) ? (playing ? 'media_pause' : 'media_play') : 'media_play_pause';
        this._call('media_player', svc, { entity_id: s.entity_id });
        this._render();
      };
      $('prev').onclick = () => this._skip('previous');
      $('next').onclick = () => this._skip('next');
      $('rt').onclick = () => { this._open = !this._open; if (this._open) { this._lyOpen = false; this._libOpen = false; } ls.set(this._lsKey('open'), this._open ? '1' : '0'); ls.set(this._lsKey('lyrics'), this._lyOpen ? '1' : '0'); this._render(); };
      $('ly').onclick = () => { this._lyOpen = !this._lyOpen; if (this._lyOpen) { this._open = false; this._libOpen = false; this._lyUser = 0; } ls.set(this._lsKey('lyrics'), this._lyOpen ? '1' : '0'); ls.set(this._lsKey('open'), this._open ? '1' : '0'); this._render(); this._progress(); setTimeout(() => this._sync(true), 460); };
      $('lb').onclick = () => {
        this._libOpen = !this._libOpen;
        if (this._libOpen) { this._open = false; this._lyOpen = false; if (!this._bstack || this._bstack.ent !== this._mp()) this._browse(null); }
        this._render();
      };
      $('bback').onclick = () => { if (this._bstack && this._bstack.length > 1) { this._bstack.pop(); this._browse(this._bstack.pop() || null); } };
      $('bbody').addEventListener('click', (e) => {
        const b = e.target.closest('[data-k]'); if (!b || !this._bitems) return;
        const c = this._bitems[+b.dataset.k]; if (!c) return;
        const qa = e.target.closest('.qa'); if (qa) { this._enqueue(c, qa); return; }
        const playOnly = !!e.target.closest('.pl');
        if (c.can_expand && !playOnly) { this._browse({ id: c.media_content_id, type: c.media_content_type, title: c.title }); return; }
        if (c.can_play) {
          this._call('media_player', 'play_media', { entity_id: this._mp(), media_content_id: c.media_content_id, media_content_type: c.media_content_type });
          this._clearBusy(); b.classList.add('busy'); this._busyEl = b;
          const bs = this._st(); this._busyTitle = bs ? bs.attributes.media_title : null;
          clearTimeout(this._busyT); this._busyT = setTimeout(() => this._clearBusy(), 5000);
        }
      });
      const bq = $('bq');
      ['keydown', 'keyup', 'keypress'].forEach((ev) => bq.addEventListener(ev, (e) => e.stopPropagation()));
      bq.addEventListener('input', () => {
        $('bsw').classList.toggle('has', !!bq.value);
        clearTimeout(this._qT); this._qT = setTimeout(() => this._search(bq.value.trim()), 380);
      });
      bq.addEventListener('keydown', (e) => { if (e.key === 'Enter') { clearTimeout(this._qT); this._search(bq.value.trim()); } if (e.key === 'Escape') { bq.value = ''; $('bsw').classList.remove('has'); this._search(''); } });
      $('bqx').onclick = (e) => { e.preventDefault(); bq.value = ''; $('bsw').classList.remove('has'); this._search(''); bq.focus(); };
      $('shuf').onclick = () => { const s = this._st(); if (s) this._call('media_player', 'shuffle_set', { entity_id: s.entity_id, shuffle: !s.attributes.shuffle }); };
      $('rep').onclick = () => { const s = this._st(); if (!s) return; const nx = { off: 'all', all: 'one', one: 'off' }[s.attributes.repeat || 'off'] || 'off'; this._call('media_player', 'repeat_set', { entity_id: s.entity_id, repeat: nx }); };
      const hold = () => { this._lyUser = Date.now() + 10000; };
      ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach((ev) => $('lbox').addEventListener(ev, hold, { passive: true }));
      $('ltext').addEventListener('click', (e) => {
        const el = e.target.closest('.l[data-i]'); const s = this._st();
        if (!el || this._mode !== 'synced' || !s || !has(s, F.SEEK)) return;
        this._lyUser = 0;
        const target = Math.max(0, this._lineT[+el.dataset.i] - 0.1);
        this._setHold(s, target, this._eff(s) === 'playing');
        this._call('media_player', 'media_seek', { entity_id: s.entity_id, seek_position: target });
        this._progress(); this._sync(true);
      });
      $('apps').addEventListener('click', (e) => {
        const b = e.target.closest('[data-src]'); if (!b) return;
        this._call('media_player', 'select_source', { entity_id: this._p.entity, source: b.dataset.src });
      });
      r.querySelectorAll('.key[data-k]').forEach((b) => { b.onclick = () => this._key(b.dataset.k); });
      this._padSetup($('pad'));
      this._seekSetup($('trk'));
      this._built = true;
    }

    _clearBusy() { clearTimeout(this._busyT); if (this._busyEl) { this._busyEl.classList.remove('busy'); this._busyEl = null; } }
    _pend(kind, ms = 4000) {
      const s = this._st();
      const a = (s && s.attributes) || {};
      this._pnd = { kind, ent: this._p.entity, state: s && s.state, t: Date.now(), upd: a.media_position_updated_at, sig: `${a.media_content_id}|${a.media_title}|${a.media_artist}` };
      clearTimeout(this._pt); this._pt = setTimeout(() => this._pendDone(), ms);
      clearTimeout(this._pt2); if (kind === 'pp') this._pt2 = setTimeout(() => this._pendUi(), 720);
      this._pendUi();
    }
    _pendDone() { clearTimeout(this._pt); clearTimeout(this._pt2); this._pnd = null; this._pendUi(); }
    _pendUi() {
      if (!this.$) return;
      const pn = this._pnd, k = pn && pn.kind, s = this._st();
      this.$('pp').classList.toggle('busy', (k === 'pp' && Date.now() - pn.t > 700) || (!!s && s.state === 'buffering'));
      this.$('prev').classList.toggle('busy', k === 'prev');
      this.$('next').classList.toggle('busy', k === 'next');
      this.$('pwr').classList.toggle('busy', k === 'pwr');
      this.$('wake').classList.toggle('busy', k === 'pwr');
    }
    _skip(dir) {
      const s = this._st(); if (!s) return;
      const kind = dir === 'next' ? 'next' : 'prev';
      const pn = this._pnd;
      if (pn && pn.ent === s.entity_id && (pn.kind === 'prev' || pn.kind === 'next')) {
        pn.kind = kind; clearTimeout(this._pt); this._pt = setTimeout(() => this._pendDone(), 4000); this._pendUi();
      } else this._pend(kind, 4000);
      if (this._pos(s) != null) this._setHold(s, 0, this._eff(s) === 'playing');
      this._call('media_player', kind === 'next' ? 'media_next_track' : 'media_previous_track', { entity_id: s.entity_id });
      this._progress();
    }
    _pendCheck(s) {
      const pn = this._pnd; if (!pn) return;
      if (pn.ent !== s.entity_id) { this._pendDone(); return; }
      const a = s.attributes;
      const sig = `${a.media_content_id}|${a.media_title}|${a.media_artist}`;
      const off = ['off', 'unavailable', 'unknown', 'standby'].includes(s.state);
      const was = ['off', 'unavailable', 'unknown', 'standby'].includes(pn.state);
      const buf = s.state === 'buffering';
      if (pn.kind === 'next' && sig !== pn.sig && !buf) this._pendDone();
      else if (pn.kind === 'prev' && !buf && (sig !== pn.sig || a.media_position_updated_at !== pn.upd)) this._pendDone();
      else if (pn.kind === 'pp' && s.state !== pn.state && !buf) this._pendDone();
      else if (pn.kind === 'pwr' && off !== was) this._pendDone();
    }

    _power(onOnly) {
      const p = this._p, s = this._st(); if (!s) return;
      const on = this._live(s) || s.state === 'on' || s.state === 'idle';
      if (onOnly && on) return;
      const want = on ? 'turn_off' : 'turn_on';
      const bit = on ? F.OFF : F.ON;
      this._pend('pwr', 10000);
      const r = this._remote(p);
      if (has(s, bit)) this._call('media_player', want, { entity_id: p.entity });
      else if (r) this._call('remote', want, { entity_id: r });
    }

    _padSetup(pad) {
      let sx = 0, sy = 0, down = false, moved = false;
      const fire = (k, x, y) => {
        this._key(k);
        if (k === 'ok') {
          const rc = pad.getBoundingClientRect(); const d = document.createElement('i'); d.className = 'ripple';
          d.style.left = `${(x ?? rc.left + rc.width / 2) - rc.left}px`; d.style.top = `${(y ?? rc.top + rc.height / 2) - rc.top}px`;
          pad.appendChild(d); setTimeout(() => d.remove(), 500);
        } else { pad.classList.remove(`nudge-${k}`); void pad.offsetWidth; pad.classList.add(`nudge-${k}`); }
      };
      pad.addEventListener('pointerdown', (e) => {
        const b = e.target.closest('.arr');
        if (b) {
          e.preventDefault(); const k = b.dataset.k; fire(k);
          clearInterval(this._rep); clearTimeout(this._repT);
          this._repT = setTimeout(() => { this._rep = setInterval(() => fire(k), 160); }, 420);
          const stop = () => { clearTimeout(this._repT); clearInterval(this._rep); window.removeEventListener('pointerup', stop); window.removeEventListener('pointercancel', stop); };
          window.addEventListener('pointerup', stop); window.addEventListener('pointercancel', stop);
          return;
        }
        down = true; moved = false; sx = e.clientX; sy = e.clientY; pad.setPointerCapture?.(e.pointerId);
      });
      pad.addEventListener('pointermove', (e) => {
        if (!down) return;
        const dx = e.clientX - sx, dy = e.clientY - sy;
        if (Math.hypot(dx, dy) > 34) {
          moved = true; fire(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'));
          sx = e.clientX; sy = e.clientY;
        }
      });
      const end = (e) => { if (!down) return; down = false; if (!moved) fire('ok', e.clientX, e.clientY); };
      pad.addEventListener('pointerup', end);
      pad.addEventListener('pointercancel', () => { down = false; });
      pad.addEventListener('click', (e) => { if (e.detail === 0) { const b = e.target.closest('[data-k]'); if (b) fire(b.dataset.k); } });
    }

    _drag(el, onMove, onEnd) {
      el.addEventListener('pointerdown', (e) => {
        if (el.classList.contains('ro')) return;
        e.preventDefault(); el.setPointerCapture?.(e.pointerId); el.classList.add('drag');
        const at = (ev) => { const r = el.getBoundingClientRect(); return Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width)); };
        onMove(at(e));
        const mv = (ev) => onMove(at(ev));
        const up = (ev) => { el.classList.remove('drag'); el.removeEventListener('pointermove', mv); el.removeEventListener('pointerup', up); onEnd(at(ev)); };
        el.addEventListener('pointermove', mv); el.addEventListener('pointerup', up);
      });
    }
    _seekSetup(trk) {
      this._drag(trk, (f) => { this._seeking = f; this._progress(); }, (f) => {
        const s = this._st(); const d = s && s.attributes.media_duration;
        this._seeking = null;
        if (d) {
          this._setHold(s, Math.round(f * d), this._eff(s) === 'playing');
          this._call('media_player', 'media_seek', { entity_id: s.entity_id, seek_position: Math.round(f * d) });
          this._progress();
        }
      });
    }

    _progress() {
      const s = this._st(); if (!s || !this.$) return;
      const a = s.attributes, d = a.media_duration;
      if (!d) return;
      let pos = this._livePos(s);
      if (this._seeking != null) pos = this._seeking * d;
      pos = Math.min(d, pos);
      this.$('fil').style.width = `${(pos / d) * 100}%`;
      this._lyricsScroll(s, pos, d);
      this.$('t0').textContent = mmss(pos); this.$('t1').textContent = `-${mmss(d - pos)}`;
    }

    _volume(s) {
      const v = this.$('vol'), a = s.attributes, id = s.entity_id;
      const sig = `${has(s, F.VSET)}${has(s, F.VSTEP)}${has(s, F.MUTE)}${!!this._remote()}`;
      if (v.dataset.sig !== sig || v.dataset.id !== id) {
        v.dataset.sig = sig; v.dataset.id = id; v.innerHTML = '';
        if (has(s, F.VSET)) {
          v.innerHTML = `<button class="tp" id="mu" title="Mute">${svg('vol')}</button><div class="vtrack" id="vt"><div class="vfill" id="vf"></div></div>`;
          this._drag(this.$('vt'), (f) => { this._vdrag = f; this.$('vf').style.width = `${f * 100}%`; },
            (f) => { this._vdrag = null; const lv = Math.round(f * 100) / 100; this._vo = { ...(this._vOver(this._st()) || {}), ent: id, vol: lv, until: Date.now() + 2500 }; this._call('media_player', 'volume_set', { entity_id: id, volume_level: lv }); });
        } else if (has(s, F.VSTEP) || this._remote()) {
          v.innerHTML = `${has(s, F.MUTE) ? `<button class="tp" id="mu" title="Mute">${svg('vol')}</button>` : ''}<button class="tp" id="vd" title="Volume down">${svg('vdown')}</button><button class="tp" id="vu" title="Volume up">${svg('vup')}</button>`;
          const step = (dir) => has(s, F.VSTEP) ? this._call('media_player', `volume_${dir}`, { entity_id: id })
            : this._call('remote', 'send_command', { entity_id: this._remote(), command: this._family() === 'roku' ? `volume_${dir}` : (dir === 'up' ? 'VOLUME_UP' : 'VOLUME_DOWN') });
          this.$('vd').onclick = () => step('down'); this.$('vu').onclick = () => step('up');
        }
        const mu = this.$('mu');
        if (mu) mu.onclick = () => {
          const s2 = this._st(), o = this._vOver(s2);
          const nx = !(o && o.mute != null ? o.mute : !!s2.attributes.is_volume_muted);
          this._vo = { ...(o || {}), ent: id, mute: nx, until: Date.now() + 2500 };
          mu.innerHTML = svg(nx ? 'mute' : 'vol');
          this._call('media_player', 'volume_mute', { entity_id: id, is_volume_muted: nx });
        };
      }
      const vo = this._vOver(s);
      const muted = vo && vo.mute != null ? vo.mute : a.is_volume_muted;
      const lvl = vo && vo.vol != null ? vo.vol : (a.volume_level || 0);
      const mu = this.$('mu'); if (mu) mu.innerHTML = svg(muted ? 'mute' : 'vol');
      const vf = this.$('vf'); if (vf && this._vdrag == null) vf.style.width = `${lvl * 100}%`;
    }

    _render(changed) {
      if (!this._hass || !this.$) return;
      const $ = this.$, p = this._p, s = this._st();
      const card = this._root.querySelector('ha-card');
      const chipSig = this._players.map((q) => `${q.entity}:${(this._st(q) || {}).state}:${q.entity === this._sel}`).join('|');
      if ($('chips').dataset.sig !== chipSig) {
        $('chips').dataset.sig = chipSig;
        $('chips').innerHTML = this._players.map((q) => {
          const qs = this._st(q);
          return `<button class="chip ${q.entity === this._sel ? 'sel' : ''} ${this._live(qs) ? 'live' : ''}" data-e="${esc(q.entity)}" role="tab" aria-selected="${q.entity === this._sel}"><span class="dot"></span>${esc(this._name(q))}</button>`;
        }).join('');
        $('chips').style.display = this._players.length > 1 ? '' : 'none';
      }
      if (!s) { $('ti').textContent = 'Unavailable'; $('su').textContent = p.entity; return; }
      const a = s.attributes, st = s.state;
      const off = ['off', 'unavailable', 'unknown', 'standby'].includes(st);
      card.classList.toggle('off', off);
      card.classList.toggle('playing', this._eff(s) === 'playing');
      card.classList.toggle('open', this._open && !!this._remote() && !!KEYS[this._family()]);
      const ms = this._st({ entity: this._mp() }); const canLib = !!ms && has(ms, F.PLAY_MEDIA) && (has(ms, F.BROWSE) || has(ms, F.SEARCH)) && ms.state !== 'unavailable' && this._opt('show_library', true) !== false;
      $('lb').classList.toggle('on', canLib);
      card.classList.toggle('lib-open', this._libOpen && canLib);
      if (this._libOpen && canLib && (!this._bstack || this._bstack.ent !== this._mp())) this._browse(null);
      $('shuf').style.display = has(s, F.SHUFFLE) && !off ? '' : 'none';
      $('rep').style.display = has(s, F.REPEAT) && !off ? '' : 'none';
      $('shuf').classList.toggle('act', !!a.shuffle);
      $('rep').classList.toggle('act', !!a.repeat && a.repeat !== 'off');
      $('rep').classList.toggle('one', a.repeat === 'one');
      $('rep').innerHTML = svg(a.repeat === 'one' ? 'repeatone' : 'repeat');
      $('eb').textContent = p.name || a.friendly_name || p.entity;
      $('pwr').classList.toggle('lit', !off);
      $('pwr').style.display = (has(s, F.ON) || has(s, F.OFF) || this._remote()) ? '' : 'none';
      let title = a.media_title, sub = [a.media_artist, a.media_album_name].filter(Boolean).join(' · ');
      if (!title) { title = a.app_name || a.source || (off ? 'Off' : st === 'idle' ? 'Idle' : 'On'); sub = off ? (st === 'unavailable' ? 'Not reachable' : '') : (a.app_name && a.source && a.source !== a.app_name ? a.source : (a.app_name ? '' : '')); }
      if (!sub && !off && a.app_name && a.media_title) sub = a.app_name;
      if (!sub && off) sub = this._name(p);
      $('ti').textContent = title; $('su').textContent = sub;
      const pic = !off && a.entity_picture ? a.entity_picture : '';
      const artMode = this._opt('art', 'auto');
      const isApp = a.media_content_type === 'app' || (!a.media_title && !!(a.app_name || a.app_id));
      const key = `${pic}|${artMode}|${isApp}`;
      if ($('art').dataset.key !== key) {
        const art = $('art'), img = $('img'), glow = $('glow');
        art.dataset.key = key; art.className = 'art'; glow.classList.remove('on');
        art.style.setProperty('--art-h', `${this._opt('art_size', 72)}px`);
        const rad = this._opt('art_radius', null);
        if (rad != null) art.style.setProperty('--art-r', typeof rad === 'number' ? `${rad}px` : rad); else art.style.removeProperty('--art-r');
        img.onload = img.onerror = null; img.removeAttribute('src');
        if (pic && artMode !== 'none' && artMode !== false) {
          art.classList.add('loading');
          img.onload = () => {
            if (art.dataset.key !== key) return;
            art.classList.remove('loading');
            let m = artMode;
            if (m === 'auto') { const r = img.naturalWidth / (img.naturalHeight || 1); m = isApp ? 'logo' : r >= 1.3 ? 'wide' : r <= 0.8 ? 'poster' : 'square'; }
            art.classList.add('show', m);
            const g = this._opt('glow', 'auto');
            if (g === true || (g !== false && m !== 'logo')) { glow.style.backgroundImage = `url("${pic}")`; glow.classList.add('on'); }
          };
          img.onerror = () => { if (art.dataset.key === key) art.className = 'art'; };
          img.src = pic;
        }
      }
      if (this._busyEl && a.media_title !== this._busyTitle) this._clearBusy();
      this._pendCheck(s); this._pendUi();
      $('pp').classList.toggle('is', this._eff(s) === 'playing');
      $('pp').disabled = !(has(s, F.PAUSE) || has(s, F.PLAY));
      $('prev').disabled = !has(s, F.PREV); $('next').disabled = !has(s, F.NEXT);
      $('prev').style.display = has(s, F.PREV) ? '' : 'none'; $('next').style.display = has(s, F.NEXT) ? '' : 'none';
      const d = a.media_duration;
      $('bar').classList.toggle('on', !!d && !off && this._opt('show_progress', true) !== false);
      $('trk').classList.toggle('ro', !has(s, F.SEEK));
      this._progress();
      this._lyrics(s, off);
      $('vol').style.display = this._opt('show_volume', true) === false ? 'none' : '';
      this._volume(s);
      const canRemote = !!this._remote() && !!KEYS[this._family()];
      $('rt').style.display = canRemote ? '' : 'none';
      const srcs = (p.apps || (a.source_list || []).filter((x) => x !== 'Home').slice(0, p.app_count || 8));
      const appSig = `${p.entity}|${srcs.join(',')}|${a.source}`;
      if ($('apps').dataset.sig !== appSig) {
        $('apps').dataset.sig = appSig;
        $('apps').innerHTML = has(s, F.SOURCE) && this._opt('show_apps', true) !== false ? srcs.map((x) => `<button class="app ${x === a.source ? 'cur' : ''}" data-src="${esc(x)}">${esc(x)}</button>`).join('') : '';
      }
      const fam = this._family();
      this._root.querySelector('.key[data-k="menu"]').style.display = KEYS[fam] && KEYS[fam].menu ? '' : 'none';
    }
  }
  if (!customElements.get('m53-media-card')) customElements.define('m53-media-card', M53MediaCard);
  window.customCards = window.customCards || [];
  if (!window.customCards.some((c) => c.type === 'm53-media-card'))
    window.customCards.push({ type: 'm53-media-card', name: 'M53 Media', description: 'Every player in one card: now playing, synced lyrics, library and search, and a remote.', preview: true });
})();
console.info('%c M53 MEDIA CARD %c 2.2.0 ', 'background:#f2a65a;color:#111;font-weight:700;border-radius:3px 0 0 3px', 'background:#333;color:#fff;border-radius:0 3px 3px 0');
