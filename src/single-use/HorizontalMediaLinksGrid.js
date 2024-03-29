import * as RiIcons from 'react-icons/ri'
import './HorizontalMediaLinksGrid.css'

function HorizontalMediaLinksGrid() {

    const links = [
        {
            name: 'Whitepaper',
            icon: <RiIcons.RiNewspaperFill />,
            url: "www.ourwhitepaper.com"
        },{
            name: 'Discord',
            icon: <RiIcons.RiDiscordFill />,
            url: "www.discord.com"
        },{
            name: 'Telegram',
            icon: <RiIcons.RiTelegramFill />,
            url: "www.telegram.com"
        },{
            name: 'Twitter',
            icon: <RiIcons.RiTwitterFill />,
            url: "www.twitter.com"
        },{
            name: 'Github',
            icon: <RiIcons.RiGithubFill />,
            url: "www.github.com"
        }
    ];

    return (
        <>
            <div className="media-links-panel-area">
                <div className="media-links-grid">
                    {
                        links.map((item) => 
                            <div className="media-link">{item.icon}</div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default HorizontalMediaLinksGrid