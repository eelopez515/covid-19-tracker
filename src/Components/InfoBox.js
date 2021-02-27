import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import '../Styles/InfoBox.css'

function InfoBox({ title, cases, total, isOrange, isRed, isGreen, active, ...props }) {
    return (
        <Card
        onClick={props.onClick}
        className={`infoBox ${active && 'infoBox--selected'} ${isOrange && 'infoBox--orange'} ${isRed && 'infoBox--red'}`}>
            <CardContent>
                <Typography className='infoBox__title' color='textSecondary'>
                    {title}<span className='todayCasesNum'> (today)</span>
                </Typography>
                <h2 className={`infoBox__cases ${isGreen && 'infoBox__cases--green'} ${isRed && 'infoBox__cases--red'}`}>{cases}</h2>
                <Typography className='infoBox__total' color='textSecondary'>
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
