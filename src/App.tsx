/// <reference path="../typings/react.d.ts" />

import * as React from 'react';
import { NICE, SUPER_NICE } from './colors';

interface ICounterState {
  counter: number
}

interface ICounterProps {
  increment: number,
  color: string
}

export class Counter extends React.Component<ICounterProps, ICounterState> {
  interval: number;
  
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }
  
  public tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }
  
  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}