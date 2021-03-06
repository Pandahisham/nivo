import React from 'react'

import { storiesOf } from '@storybook/react'
import { generateCountriesData } from 'nivo-generators'
import '../style.css'
import { Bar } from '../../src'

const keys = ['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut']
const commonProperties = {
    width: 900,
    height: 460,
    margin: { top: 60, right: 80, bottom: 60, left: 80 },
    data: generateCountriesData(keys, { size: 7 }),
    indexBy: 'country',
    keys,
    xPadding: 0.2,
}

storiesOf('Bar', module)
    .addDecorator(story =>
        <div className="wrapper">
            {story()}
        </div>
    )
    .add('stacked', () => <Bar {...commonProperties} />)
    .add('stacked horizontal', () =>
        <Bar {...commonProperties} layout="horizontal" enableGridY={false} enableGridX={true} />
    )
    .add('grouped', () => <Bar {...commonProperties} groupMode="grouped" />)
    .add('grouped horizontal', () =>
        <Bar
            {...commonProperties}
            groupMode="grouped"
            layout="horizontal"
            enableGridY={false}
            enableGridX={true}
        />
    )
    .add('using custom colorBy', () =>
        <Bar {...commonProperties} colorBy={({ id, data }) => data[`${id}Color`]} />
    )
