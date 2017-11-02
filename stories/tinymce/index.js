import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Tinymce } from '../../src';

// import { Tooltip,  Button } from '../../src';
import withReadme from 'storybook-readme/with-readme';
const options = {
  inline: false
}
const rawContent = '<p className="123">bdbdbdbdbd</p><p>kdkdkd</p><figure><img src="https://dev.datahunter.cn/upload/a6573863e125c03907e898d2e63a9a30.png"/></figure><p><br></p>'
storiesOf('富文本', module)
  // .addDecorator(withReadme(listReadme))
  .addWithInfo('默认列表', () => (
   <div style={{ width: 600, height: 300, background: '#3e3e3e', padding: 10}}>
     <Tinymce
       uploadConfig={{
       name: 'bin',
       action: "https://dev.datahunter.cn/api/upload",
       formatResult: (res) => {
         return {
            url: `https://dev.datahunter.cn/${res.msg.url}`
         }
       }

     }}
    //  onSave={(r) => {console.log('test-export', r)}}
     footer
   />
   </div>
 ), { inline: false })
