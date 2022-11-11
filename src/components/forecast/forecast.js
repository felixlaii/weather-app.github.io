import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    return (
        <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img src={`icons/${item.weather[0].icon}.png`} 
                                className="icon-small"
                                alt="weather" />
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                </AccordionItem>
            )
            )}
        </Accordion>
        </>
    )
}