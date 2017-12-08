import React from 'react'

import OperationsContainer from './OperationsContainer'
import NewOperationModal from './NewOperationModal'


const Operations = () => (
  <div>
    <NewOperationModal />
    <OperationsContainer />
  </div>
)

export default Operations