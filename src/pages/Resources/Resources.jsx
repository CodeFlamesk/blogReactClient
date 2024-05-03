

import TitleMainBlock from "components/TitleMainBlock/TitleMainBlock"

import UnlockPodcast from "components/UnlockPodcast/UnlockPodcast"
import DownloadPDF from "components/DownloadPDF/DownloadPDF.jsx"
import ResourceNumbers from "components/ResourceNumbers/ResourceNumbers.jsx"
import BlockHeaderItem from "components/BlockHeaderItem/BlockHeaderItem.jsx"
import Switch from "components/Switch/Switch.jsx"

const Resources = () => {
    return (
        <>
            <TitleMainBlock title={"Unlock a World of "} labelSpan={"Knowledge"} text={"Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."}/>
            <ResourceNumbers/>
            <BlockHeaderItem label={"Dive into the Details"} title={"In-Depth Reports and Analysis"}>
                <Switch/>
            </BlockHeaderItem>
            <UnlockPodcast/>
            <DownloadPDF/>
            
        </>
    )
}

export default Resources