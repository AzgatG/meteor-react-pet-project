import React from "react"
// components
import SiteHeader from '../components/_common/SiteHeader'


export default DefaultLayout = ({ children }) => (
  <div>
    <SiteHeader />
    { children }
  </div>
)