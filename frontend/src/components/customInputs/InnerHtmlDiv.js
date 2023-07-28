import React, { useEffect, useRef } from 'react'

const InnerHtmlDiv = (props) => {
 
  return (
    <div dangerouslySetInnerHTML={{ __html: props?.value }}>

    </div>
  )
}

export default InnerHtmlDiv