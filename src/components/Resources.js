import React from 'react';

 const Resources = () => {

  return (
    <div className="container-fluid">        
       <h1>Resources</h1>
        <p>
          Here are our favourite online resources and tools on mental health to help you learn about what might be going on for you. 
        </p>
        <h2>Mental health</h2>
       <div class="btn-group">
        <a href="https://headsupguys.org/" class="buttonMh" target="_blank">Heads Up Guys</a>
        <br/>
        <a href="https://youthspace.ca/youthspace-resources/" class="buttonMh" target="_blank">YouthSpace</a>
        <br/>
        <a href="https://www.anxietycanada.com/learn-about-anxiety/anxiety-in-youth/?_ga=2.193133357.1091829281.1692211004-1412770863.1692211004&_gl=1*jfwhxb*_ga*MTQxMjc3MDg2My4xNjkyMjExMDA0*_ga_Y4J3VSGKVS*MTY5MjIxMTAwMy4xLjEuMTY5MjIxMTAwNS4wLjAuMA.." class="buttonMh" target="_blank">Anxiety Canada</a>
      </div>
        <h2>School and work</h2>
       <div class="btn-group1"> 
        <a href="https://kidshelpphone.ca/get-info/going-to-school-50-student-wellness-resources/?msclkid=1b4356811624193eb1bf325c29455cac&utm_source=bing&utm_medium=cpc&utm_campaign=Kids%20Help%20Phone%20Paid_Gateway-Bing-NTL_2023-194_Search_Generic-NTL_En_CA&utm_term=educational%20stress&utm_content=Kids%20Help%20Phone%20Paid_Gateway-Bing-NTL_2023-194_Search_Generic-NTL_En_CA_School" class="buttonMh1" target="_blank">Back to school - Kids Help Phone</a>
       </div> 
        <h2>Relationships</h2>
        <div class="btn-group2">
        <a href="https://kidshelpphone.ca/get-info/healthy-relationships-vs-unhealthy-relationships/?msclkid=e98b0ee1c38815834c5e6a3cdfdccbcc&utm_source=bing&utm_medium=cpc&utm_campaign=Kids%20Help%20Phone%20Paid_Gateway-Bing-NTL_2023-194_Search_Generic-NTL_En_CA&utm_term=relationship%20help&utm_content=Kids%20Help%20Phone%20Paid_Gateway-Bing-NTL_2023-194_Search_Generic-NTL_En_CA_Relationships" class="buttonMh2" target="_blank">Healthy Relationships - Kids Help Phone</a>
        </div>
        <h2>Substance abuse</h2>
        <div className="btn-group">
        <a href="https://ccsa.ca/youth-and-emerging-adults" class="buttonMh" target="_blank">Canadian Centre on Substance Use and Addiction</a>
        <br/>
        <a href="https://www.canada.ca/en/health-canada/services/substance-use/get-help-with-substance-use.html" class="buttonMh" target="_blank">Canada.ca</a>
        <br/> 
        <a href="https://foundrybc.ca/articles/substance-use-tips-reducing-risk-harm/?return_page=2109" class="buttonMh" target="_blank">Harm Reduction - Foundry BC</a>
        </div>
    </div>
  )

}
 
export default Resources