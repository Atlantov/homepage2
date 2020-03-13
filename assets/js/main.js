let categoryTitle = ['media', 'Social', 'Code', 'Social journal', 'social3', 'Sport', 'Foto', 'Journal', 'Sound', 'games3', 'Tools', 'Courses', 'code', 'work', 'Widget', 'Hack', 'Clothing', 'school', 'Archive'];
let colors = ['font_pre01', 'font_pre02', 'font_pre03'];
let categoryLinks = [
    //media
    [
        ['http://vk.com/', 'Vk'],
        ['https://netflix.com', 'netflix'],
        ['https://youtube.com/feed/subscriptions', 'youtube'],
        ['https://soundcloud.com/jott_uh_be', 'soundcloud'],
        ['https://rocketbeans.tv/wochenplan/?details=1', 'rbtv'],
        ['http://crunchyroll.com', 'crunchy'],
        ['https://twitch.tv', 'twitch'],
        ['https://jott-uh-be.bandcamp.com', 'bandcamp']
    ],
    //Social
    [
        ['https://pr0gramm.com', 'pr0'],
        ['https://discordapp.com/channels/@me', 'discord'],
        ['https://telegram.org/dl/webogram', 'telegram'],
        ['https://www.deviantart.com', 'deviantart'],
        ['https://stackexchange.com', 'stackexchange'],
        ['https://stackoverflow.com', 'stackoverflow'],
        ['http://hanfburg.de', 'hb'],
        ['https://twitter.com', 'twitter'],
        ['https://instagram.com', 'insta']
    ],
    //Code
    [
        ['https://github.com', 'Github'],
        ['https://codepen.io', 'Codepen'],
        ['https://browserframe.com', 'Browser frame'],
        ['https://css-tricks.com', 'Css Tricks'],
        ['https://pastebin.com', 'Pastebin'],
        ['https://stackoverflow.com', 'stackoverflow'],
        ['http://hanfburg.de', 'hb'],
        ['https://twitter.com', 'twitter'],
        ['https://instagram.com', 'insta']
    ],
    //Social journal
    [
        ['https://medium.com', 'Medium'],
        ['https://discordapp.com/channels/@me', 'discord'],
        ['https://telegram.org/dl/webogram', 'telegram'],
        ['https://www.deviantart.com', 'deviantart'],
        ['https://stackexchange.com', 'stackexchange'],
        ['https://stackoverflow.com', 'stackoverflow'],
        ['http://hanfburg.de', 'hb'],
        ['https://twitter.com', 'twitter'],
        ['https://instagram.com', 'insta']
    ],
    //social3
    [
        ['https://pr0gramm.com', 'pr0'],
        ['https://discordapp.com/channels/@me', 'discord'],
        ['https://telegram.org/dl/webogram', 'telegram'],
        ['https://www.deviantart.com', 'deviantart'],
        ['https://stackexchange.com', 'stackexchange'],
        ['https://stackoverflow.com', 'stackoverflow'],
        ['http://hanfburg.de', 'hb'],
        ['https://twitter.com', 'twitter'],
        ['https://instagram.com', 'insta']
    ],
    //Sport
    [
        ['https://metalgear.fandom.com/wiki/CQC', 'CQC'],
        ['https://reddit.com/r/slaythespire/', 'slay the spire']
    ],
    //Foto
    [
        ['https://www.flickr.com/photos/sandman_kk/', 'Flickr'],
        ['https://pixlr.com/x/', 'Pixlr X'],
        ['http://opencritic.com/browse?page=0&sort=date&platforms=%5B27%5D&genres=%5B%5D&date=Released', 'opencritic']
    ],
    //Journal
    [
        ['https://www.theverge.com/', 'The Verge'],
        ['http://crea-turestudios.com/', 'session'],
        ['https://bungie.net', 'destiny2'],
        ['https://battlerite.com', 'battlerite'],
        ['https://mtgdecks.net//Standard', 'mtg a'],
        ['https://docs.google.com/spreadsheets/d/11yn0crhwmH9zs9sTb6vZyyjxF1sJXWyVeTY49c2lfSM/edit#gid=1575270165', 'rl pi'],
        ['https://humblebundle.com', 'humble bundle'],
        ['https://store.steampowered.com/', 'steam'],
        ['https://www.gog.com/', 'gog'],
        ['https://itch.io', 'itch'],
        ['http://opencritic.com/browse?page=0&sort=date&platforms=%5B27%5D&genres=%5B%5D&date=Released', 'opencritic']
    ],
    //Sound
    [
        ['https://legiontd2.com', 'ltd2'],
        ['http://crea-turestudios.com/', 'session'],
        ['https://www.musicstore.com/ru_RU/RUB', 'musicstore'],
        ['https://battlerite.com', 'battlerite'],
        ['https://mtgdecks.net//Standard', 'mtg a'],
        ['https://docs.google.com/spreadsheets/d/11yn0crhwmH9zs9sTb6vZyyjxF1sJXWyVeTY49c2lfSM/edit#gid=1575270165', 'rl pi'],
        ['https://humblebundle.com', 'humble bundle'],
        ['https://store.steampowered.com/', 'steam'],
        ['https://www.gog.com/', 'gog'],
        ['https://itch.io', 'itch'],
        ['http://opencritic.com/browse?page=0&sort=date&platforms=%5B27%5D&genres=%5B%5D&date=Released', 'opencritic']
    ],
    //games3
    [
        ['https://legiontd2.com', 'ltd2'],
        ['http://crea-turestudios.com/', 'session'],
        ['https://bungie.net', 'destiny2'],
        ['https://battlerite.com', 'battlerite'],
        ['https://mtgdecks.net//Standard', 'mtg a'],
        ['https://docs.google.com/spreadsheets/d/11yn0crhwmH9zs9sTb6vZyyjxF1sJXWyVeTY49c2lfSM/edit#gid=1575270165', 'rl pi'],
        ['https://humblebundle.com', 'humble bundle'],
        ['https://store.steampowered.com/', 'steam'],
        ['https://www.gog.com/', 'gog'],
        ['https://itch.io', 'itch'],
        ['http://opencritic.com/browse?page=0&sort=date&platforms=%5B27%5D&genres=%5B%5D&date=Released', 'opencritic']
    ],
    //Tools
    [
        ['https://visualsitemaps.com/?ref=producthunt', 'Visual site maps'],
        ['https://zen.unit.ms/', 'Text Editor'],
        ['https://www.ebay.de/', 'ebay'],
        ['https://www.massdrop.com/', 'massdrop'],
        ['https://www.discogs.com/', 'discogs'],
        ['https://www.thomann.de/de/index.html?permsel=1', 'thomann']
    ],
    //Courses
    [
        ['https://banking.postbank.de/rai/login', 'postbank'],
        ['https://banking.postbank.de/rai/login?legacy=true', 'postbank-legacy'],
        ['https://ilovecoding.org/courses', 'Code'],
        ['https://dkb.de/banking', 'dkb']
    ],
    //code
    [
        ['https://github.com/jubit', 'github'],
        ['https://codepen.io/jub/', 'codepen'],
        ['https://devdocs.io/', 'devdocs'],
        ['https://w3schools.com', 'w3schools'],
        ['https://fontawesome.com/', 'fontawesome']
    ],
    //work
    [
        ['https://wiki.bolde.de/wordpress/', 'bolde wiki'],
        ['https://kaseya.bolde.de', 'kaseya'],
        ['https://kaseya.bolde.de/Dashboard/DashboardView.aspx?id=1039&mode=view', 'dashboard'],
        ['https://secure10.datev.de/an-online', 'an-o'],
        ['https://customer.3cx.com', '3cx customer'],
        ['https://forum.acronis.com/user/login?a', 'acronis forum'],
        ['https://drive.terracloud.de/folderstable', 'terra cloud'],
        ['https://wortmann.de/de-de/profile/snsearch.aspx', 'wm sns'],
        ['https://www.catalog.update.microsoft.com/Home.aspx', 'muc'],
        ['https://cartridge-space.de/leergutankauf-toner.html', 'cartridge-space']
    ],
    //Widget
    [
        ['https://wigle.net/', 'Wi-fi map'],
        ['https://kaseya.bolde.de', 'kaseya'],
        ['https://kaseya.bolde.de/Dashboard/DashboardView.aspx?id=1039&mode=view', 'dashboard'],
        ['https://secure10.datev.de/an-online', 'an-o'],
        ['https://customer.3cx.com', '3cx customer'],
        ['https://forum.acronis.com/user/login?a', 'acronis forum'],
        ['https://drive.terracloud.de/folderstable', 'terra cloud'],
        ['https://wortmann.de/de-de/profile/snsearch.aspx', 'wm sns'],
        ['https://www.catalog.update.microsoft.com/Home.aspx', 'muc'],
        ['https://cartridge-space.de/leergutankauf-toner.html', 'cartridge-space']
    ],
    //Hack
    [
        ['🗂️Mobile', '🗂️Mobile:'],
        ['https://habr.com/ru/post/400903/', 'Habr article'],
        ['🗂️Mobile', '🗂️Search:'],
        ['https://habr.com/ru/company/echelon/blog/319334/', 'Habr article'],
        ['https://proglib.io/p/how-to-google-as-a-programmer/', 'Google search'],
        ['🗂️Mobile', '🗂️Articles:'],
        ['http://www.furfur.me/furfur/freedom/freedom/213923-pravo-na-zabvenie', 'Furfur'],
        ['https://piratemedia.net/anon1', 'Pirate media'],
        ['https://forum.acronis.com/user/login?a', 'acronis forum'],
        ['https://drive.terracloud.de/folderstable', 'terra cloud'],
        ['https://wortmann.de/de-de/profile/snsearch.aspx', 'wm sns'],
        ['https://www.catalog.update.microsoft.com/Home.aspx', 'muc'],
        ['https://cartridge-space.de/leergutankauf-toner.html', 'cartridge-space']
    ],
    //Clothing
    [
        ['TechWesar:', '🗂️TechWear:'],
        ['http://www.radgas.com/index.html', 'Radgas'],
        ['https://www.grailed.com', 'Grailed'],
        ['https://aesthetichomage.com/', 'Aesthetic homage'],
        ['https://www.phenix.co.jp/alkphenix/', 'Alkphenix'],
        ['https://customer.3cx.com', '3cx customer'],
        ['https://forum.acronis.com/user/login?a', 'acronis forum'],
        ['https://drive.terracloud.de/folderstable', 'terra cloud'],
        ['https://wortmann.de/de-de/profile/snsearch.aspx', 'wm sns'],
        ['https://www.catalog.update.microsoft.com/Home.aspx', 'muc'],
        ['https://cartridge-space.de/leergutankauf-toner.html', 'cartridge-space']
    ],
    //school
    [
        ['https://poly.webuntis.com/WebUntis/?school=rbz-technik#/basic/main', 'timetable'],
        ['https://moodle.rbz-technik.de/moodle/login/index.php', 'moodle'],
        ['http://moodle.rbz-technik.de:20010/users/sign_in', 'GitLab'],
        ['https://www.rbz-technik.de/fileadmin/user_upload/Inhalte/Formulare/EntschuldigungsFormular_BS_2017_07_11F.pdf', 'Entschuldigung'],
        ['http://vlsm-calc.net', 'vlsm-calc'],
        ['https://de.wikipedia.org/wiki/Nassi-Shneiderman-Diagramm', 'struktur diagram'],
        ['https://de.wikipedia.org/wiki/Netzplantechnik', 'netzplantechnik']
    ],
    //Archive
    [
        ['https://archive.org/', 'Archive Org'],
        ['http://pi.hole/admin/', 'pi-hole'],
        ['http://coder.local/', 'pi-coder'],
        ['http://fritz.box', 'fritz box'],
        ['https://dict.leo.org/englisch-deutsch/', 'leo'],
        ['https://privnote.com', 'privnote'],
        ['http://everynoise.com', 'every noise'],
        ['https://icloud.com', 'icloud'],
        ['https://duckduckgo.com/bang', '!bangs'],
        ['http://colorhunt.co', 'color hunt'],
        ['https://www.colorhexa.com/', 'color hexa'],
        ['https://color.adobe.com/create/color-wheel/', 'color wheel'],
        ['http://qr-code-generator.com', 'qr-gen'],
        ['https://ipinfo.io/ip', 'ipinfo'],
        ['https://wikileaks.org/ciav7p1/cms/page_17760284.html', 'jap faces'],
        ['https://textfac.es', 'textfaces'],
        ['https://www.hiveworkshop.com/threads/beginning-jass-tutorial-series.30765/', 'jass tutorial'],
        ['https://www.hiveworkshop.com/threads/codeless-save-and-load-multiplayer-v2-0-0.278664/', 'codeless save load']
    ]
];

window.onload = function() {
    insertLinks();
};

function insertLinks() {
    let html = '';
    let numGroup = 0;
    let numCat = '01';
    for (let i = 0; i < categoryTitle.length; i++) {
        if (i === 0 || i === 3 || i === 6 || i === 9 || i === 13  || i === 16 || i === 19){
            if (i === 1  || i === 4 || i === 7  || i === 15 || i === 17) {
                //alert('first html appending');
                html += '<div id=\'cat_top\'>';
            }
            numGroup++;
            html += '<div id=\'grp_0' + numGroup + '\' class=\'cat_group\'>';
        }
        if (i > 22) {
            numCat = '02';
        }
        html += '<div class=\'cat_' + numCat + ' cat_' + categoryTitle[i] + '\'>';
        html += '<label class=\'catPreText font_bold\'>';
        html += '<span class=\'' + colors[0] + '\'> ~ </span>';
        html += '<span class=\'' + colors[1] + '\'> ❯ </span>';
        html += '[<span class=\'' + colors[2] + '\'>' + categoryTitle[i] + '</span>]<span class=\'' + colors[1] + '\'>: </span>ls';
        html += '</label>';
        html += '<div class=\'links\'>';
        for (let x in categoryLinks[i]) {
            html += '       <a href=\'' + categoryLinks[i][x][0] + '\'>' + categoryLinks[i][x][1] + '</a>';
        }
        html += '</div>';
        html += '</div>';
        if (i === 2 || i === 5 || i === 8 || i === 12 || i === 15) {
            if (i === 8 || i === 13) {
                html += '</div>';
            }
            html += '</div>';
        }
    }
    document.getElementById('content').innerHTML = html;
    let heightCatTop = 0;
    for (let i = 1; i <= numGroup; i++) {
        let heightCatGrp = document.getElementById('grp_0' + i).offsetHeight;
        if (heightCatGrp > heightCatTop)
            heightCatTop = heightCatGrp;
    }
    document.getElementById('cat_top').style.height = (heightCatTop + 10) + 'px';
}
