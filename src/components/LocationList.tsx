import { useSelector } from "react-redux";
import styled from "styled-components";

const DateList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `

const Box = styled.div`
    border: 1px solid grey;
    max-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(75, 75, 75);
    border-radius: 5px;
    &:hover {
        background-color: rgb(85, 85, 85);
    }
`

const DateTitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid grey;
`

const DateTitle = styled.p`
    font-size: 16px;
    font-family: 'Calibri';
    color: rgb(200, 200, 200);
    text-align: center;
    width: 90%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Location = styled.p`
    color: rgb(200, 200, 200);
`

interface Date {
    date: {
        list: []
    }
}

const LocationList = () => {
    const list = useSelector((state: Date) => state.date.list);
    console.log(list)
    
    const openUrl = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <DateList>
            {
                list.map(({ name, location, url, dateType }: any, idx) => {
                    return (
                        <Box onClick={() => openUrl(url)} key={`${name}${location}${idx}`}>
                            <DateTitleContainer>
                                <DateTitle>
                                    { name }
                                </DateTitle>
                            </DateTitleContainer>
                            <Location>
                                { location }
                            </Location>
                            <Location>
                                { dateType }
                            </Location>
                        </Box>
                    )
                })
            }
        </DateList>
    )
}

export default LocationList;