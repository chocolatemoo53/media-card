# M53 Media Card

One Home Assistant card for every player in the house: what's playing, synced lyrics, your music library with search, and a slide-out remote for TVs.

It's a single file with no dependencies and works with any theme.

- **Now playing:** artwork that adapts to its shape (album covers, app logos, posters), progress, volume and sources.
- **Lyrics:** time-synced lyrics from [LRCLIB](https://lrclib.net). Tap a line to jump to it. They work with whatever the player reports as the current song.
- **Library and search:** browse playlists, albums and artists, then tap to play, or use the queue button on a song to line it up after the current one (Spotify and players that support queuing, like Music Assistant). Results are grouped into Songs, Artists, Albums and Playlists.
- **Remote:** a swipe pad, Back, Home and Menu buttons, and app shortcuts. Supports Roku, Apple TV, Android TV / Fire TV and Xbox.

## Install

**HACS (custom repository):** in HACS open ⋮ → *Custom repositories*, add this repository's URL as type *Dashboard*, then install **M53 Media Card**.

**By hand:**

1. Copy `m53-media-card.js` into your `config/www/` folder.
2. Go to *Settings → Dashboards → ⋮ → Resources* and add `/local/m53-media-card.js` as a **JavaScript module**.
3. Reload the browser.

## Add the card

The quickest setup leaves the players out entirely, and the card picks them for you (anything playing comes first):

```yaml
type: custom:m53-media-card
```

The card editor has a full player list. You can add, remove and reorder players, name them, and pick a remote or a Music Assistant player for each, plus switches to hide lyrics, library, search, volume, the progress bar or app shortcuts. Or write it yourself:

```yaml
type: custom:m53-media-card
players:
  - entity: media_player.living_room_tv
    name: Living Room
  - entity: media_player.kitchen_homepod
  - media_player.spotify   # a plain entity id works too
```

Use Music Assistant to control music sources you have connected, and the card will treat it like its own source.

```yaml
players:
  - entity: media_player.bedroom_apple_tv        # remote + now playing
    music_player: media_player.bedroom_apple_tv_2 # Music Assistant player for library/search
```

Even without Music Assistant, anything that reports what's playing shows up, Apple Music on an Apple TV included. You get the artwork, controls and lyrics, just no library search.

## Options

Put these on a player, or at the top of the card to apply them to every player.

| Option | Default | What it does |
|---|---|---|
| `entity` | — | The `media_player` to show (player only). |
| `name` | entity name | Label on the player chip. |
| `remote` | `remote.<same name>` | Remote entity for the slide-out remote. Set to `false` to hide it. |
| `type` | detected | Remote key set: `roku`, `apple_tv`, `androidtv`, `androidtv_remote`, `xbox`. |
| `music_player` | the player itself | Player used for library, search and playback (e.g. a Music Assistant player). |
| `apps` | the player's sources | List of app or source names for the remote's shortcut buttons. |
| `app_count` | `8` | How many sources to show when `apps` isn't set. |
| `lyrics` | `true` | `false` hides lyrics. Can also be a sensor entity that holds lyrics text. |
| `lyrics_source` | `auto` | `auto` (LRCLIB, then a lyrics sensor), `lrclib`, `genius` or `false`. |
| `lyrics_offset` | `0` | Seconds to shift synced lyrics if they run early or late. |
| `show_library` | `true` | Show the library button. |
| `search` | `true` | Show search inside the library. |
| `show_progress` / `show_volume` / `show_apps` | `true` | Hide parts of the card. |
| `art` | `auto` | `auto` picks by image shape; force `square`, `wide`, `poster` or `logo`, or `false` to hide artwork. |
| `art_size` | `72` | Artwork height in pixels. |
| `art_radius` | automatic | Corner radius for artwork. |
| `glow` | `auto` | Soft background glow from the artwork. `false` to turn it off. |
| `remote_open` | `false` | Card-level: start with the remote open. |

## Styling

The card follows your theme's colors and fonts. To tune it, you can set these theme variables:

`--m53-ease` (animation curve), `--m53-lyrics-h` (lyrics height, default `300px`), `--m53-library-h` (library height, default `360px`), `--m53-media-glow` (glow strength, default `.42`), `--m53-glow: none` (no glow), `--m53-play: paused` (pause looping animations).

## Credits

Lyrics come from [LRCLIB](https://lrclib.net), a free, open lyrics database. The card requests lyrics directly from your browser and sends only the song's title, artist, album and length.

MIT licensed.
