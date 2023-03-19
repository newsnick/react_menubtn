import React, { useState } from 'react'
import Header from '../components/header/Header'
import Body from '../components/body/Body'
import List from '../components/list/List'
import Form from '../components/form/Form'
import Footer from '../components/footer/Footer'
import Link from '../components/link/Link'
import styles from './MainPage.module.css'

const components = [
  { name: 'Headers', component: <Header /> },
  { name: 'Body', component: <Body /> },
  { name: 'Form', component: <Form /> },
  {
    name: 'List',
    component: (
      <List
        items={[
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
        ]}
      />
    ),
  },
  { name: 'Footer', component: <Footer /> },
  {
    name: 'Link',
    component: <Link href="https://www.google.com">Visit Google.com</Link>,
  },
]

function MainPage() {
  const [showComponent, setShowComponent] = useState(
    components.map(() => false)
  )

  const handleButtonClick = (index) => {
    setShowComponent(
      showComponent.map((value, i) => (i === index ? !value : value))
    )
  }

  return (
    <div className={styles.container}>
      {components.map(
        (component, index) => showComponent[index] && component.component
      )}
      {components.map((component, index) => (
        <button key={index} onClick={() => handleButtonClick(index)}>
          {component.name}
        </button>
      ))}
    </div>
  )
}

export default MainPage

/*import React, { useState } from 'react'
import styles from './MainPage.module.css'
import Header from '../components/header/Header'
import Body from '../components/body/Body'
import List from '../components/list/List'
import Form from '../components/form/Form'
import Footer from '../components/footer/Footer'
import Link from '../components/link/Link'

function MainPage() {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]

  const [showHeader, setShowHeader] = useState(false)
  const [showBody, setShowBody] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [showList, setShowList] = useState(false)
  const [showFooter, setShowFooter] = useState(false)
  const [showLink, setShowLink] = useState(false)

  return (
    <div className="mainpage">
      {showHeader && <Header />}
      {showBody && <Body />}
      {showForm && <Form />}
      {showList && <List items={items} />}
      {showFooter && <Footer />}
      {showLink && <Link href="https://www.google.com">Visit Google.com</Link>}
      <button onClick={() => setShowHeader(!showHeader)}>Headers</button>
      <button onClick={() => setShowBody(!showBody)}>Body</button>
      <button onClick={() => setShowForm(!showForm)}>Form</button>
      <button onClick={() => setShowList(!showList)}>List</button>
      <button onClick={() => setShowFooter(!showFooter)}>Footer</button>
      <button onClick={() => setShowLink(!showLink)}>Link</button>
    </div>
  )
}

export default MainPage
*/
