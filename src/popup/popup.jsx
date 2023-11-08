import React from 'react'
import { createRoot } from 'react-dom/client'
import style from './popup.module.css'

const test = (
    <div>
        <h1>Hello World</h1>
        <p>Etiam sodales tortor sed sagittis finibus. Sed mattis felis et gravida vestibulum. Phasellus maximus nibh non ex aliquet, sed ultrices velit accumsan. Ut quis diam eget augue accumsan malesuada ut quis eros. Sed interdum dui nibh, vel imperdiet mi ultrices et. Sed vitae eros nulla. Vivamus ut arcu vel augue maximus sodales eget non mi. Etiam cursus, dolor a tincidunt blandit, nulla purus sagittis mauris, ut egestas massa nulla ac massa.</p>
    </div>
)

const container = document.createElement('div')
document.body.appendChild(container);
const root = createRoot(container);
root.render(test)