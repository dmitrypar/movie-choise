import React, {ReactNode, Component} from 'react'
import { ErrorIndicator } from './error-indicator/error-indicator'


interface Props  {
  children: ReactNode
}

interface State  {
  hasError: boolean
}

export class ErrorBoundry extends Component <Props, State> {
    state={
      hasError: false
    }
    static getDerivedStateFromError(error: any): State {
     
      return   {hasError: true}
     
    }
    // componentDidCatch(){
    //   handleErrors(Error)
    // }



    render(){
      if(this.state.hasError){
       return  <ErrorIndicator/>
      }
      return this.props.children
    }
  }