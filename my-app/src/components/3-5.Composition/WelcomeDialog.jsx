import React from 'react'
// import Dialog from './Dialog'
import CustomDialog from './CustomDialog'

export default function WelcomeDialog() {
//   return (
//     <Dialog>
//         <h1>Welcome</h1>
//         <h5>Thank you!</h5>    
//     </Dialog>
//   )
    return (
        <CustomDialog title="Welcome" des="thank you!" />
    )
}
