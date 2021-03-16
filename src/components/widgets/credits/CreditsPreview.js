import React from 'react'

export default function Preview({ value }) {
  const credits = value;
  const styles = {
    'display': 'grid',
    'grid-template-columns': 'auto 1fr',
    'justify-items': 'left',
    'gap': '0.2rem'
  }

  return (
    <dl style={styles}>
      {credits.map((credit, i) => (
        <>
          <dt>{credit.type}</dt>
          <dd>{credit.person}</dd>
        </>
      ))}
    </dl>
  )
}