import { forwardRef, RefForwardingComponent, Ref, EffectCallback, Reducer, Dispatch } from 'react';
declare type AnyObject = {
    [key: string]: any;
};
/**
 * > initialize when component first render
 *
 * @param callback {Function} The callback only run once when component initialize
 * @returns {any} The value returned will be the return value of `useMemo` (keep same during each render)
 */
export declare function onInit(callback: EffectCallback): any;
/**
 * > Similar to componentDidMount, first time creation
 *
 * @param callback {Function} to run for component first time creation
 * @param sync {Boolean} whether to run after layout or deferred after paint
 * @returns {void}
 */
export declare function onDidMount(callback: EffectCallback, sync?: boolean): void;
/**
 * > Callback after each render(), first time and later
 *
 * @param callback {Function} to run after each render()
 * @param sync {Boolean} whether to run after layout or deferred after paint
 * @returns {void}
 */
export declare function onDidRender(callback: EffectCallback, sync?: boolean): void;
/**
 * > Similar to componentWillUnmount, before DOM removed
 *
 * @param callback {Function} to run before component will unmount
 * @param sync {Boolean} whether to run after layout or deferred after paint
 * @returns {void}
 */
export declare function onWillUnmount(callback: () => void | undefined, sync?: boolean): void;
/**
 * > Similar to componentDidUpdate, skip run for first time render
 *
 * @param callback {Function} to run after component rendered
 * @param sync {Boolean} whether to run after layout or deferred after paint
 * @returns {void}
 */
export declare function onDidUpdate(callback: EffectCallback, sync?: boolean): void;
/**
 * > Return redraw function like this.forceUpdate in Class Component
 *
 * the redraw function keep same reference between render.
 *
 * @returns {Function} The forceUpdate function to re-render component
 */
export declare function useRedraw(): Function;
/**
 * > A component life time version of useState, the state never stale and safe to use
 *
 * @param initialState {object} The initial state object
 * @returns {object} [state, setState] The state/setState never stale
 */
export declare function useLifeState(initialState?: any): [any, Function];
declare type FunctionOrObject = (() => AnyObject) | AnyObject;
/**
 * > A component life time version of useReducer, the state never stale and safe to sue
 *
 * @param reducer {Function} The reducer function
 * @param initialState {object} The initial state object
 * @returns {object} [state, dispatch] The state/dispatch never stale
 */
export declare function useLifeReducer(reducer: Reducer<AnyObject, any>, initialState?: FunctionOrObject): [any, Dispatch<any>];
/**
 * > Like setTimeout, but auto destroyed when re-render
 *
 * @param callback {Function} run when onTimeout
 * @param delay {Number|null|undefined} seconds to delay, null to stop
 * @returns {React.RefObject} the useRef object to setTimeout id
 */
export declare function useTimeout(callback: any, delay?: any): import("react").MutableRefObject<undefined>;
/**
 * > Like setInterval, but auto destroyed when re-render
 *
 * @param callback {Function} run when onInterval
 * @param delay {Number|null|undefined} seconds to delay, null to stop
 * @returns {React.RefObject} the ref to setInterval id
 */
export declare function useInterval(callback: any, delay?: any): import("react").MutableRefObject<undefined>;
/**
 * > Tick like functions helper method, auto destroyed when re-render
 *
 * @param tickFn {Function} e.g. setTimeout, setInterval, requestIdleCallback, request​Animation​Frame
 * @param clearTickFn {Function} e.g. clearTimeout, clearInterval, cancel​Idle​Callback, cancel​Animation​Frame
 * @param callback {Function} run when onTick
 * @param options {Number|null|undefined} options to pass with callback, null to stop
 * @returns {React.RefObject} the ref to setInterval id
 */
export declare function useTick(tickFn: any, clearTickFn: any, callback: any, options?: any): import("react").MutableRefObject<undefined>;
/**
 * > Expose function component ref to parent
 *
 * Usage: `exposeRef(expose => (props, ref) => ReactNode)`
 *
 * In function component, should call `expose(ref, fn, deps)`
 *
 * The `expose` function just a wrapper of `useImperativeHandle`
 *
 * @param componentFactory {Function} `exposeFunction -> React.Component`, the componentFactory should return component
 * @returns {React.Component}
 */
export declare function exposeRef(createComponent: (ref: Ref<any>) => (...args: Parameters<RefForwardingComponent<any>>) => ReturnType<RefForwardingComponent<any>>): ReturnType<typeof forwardRef>;
/**
 * > Check if value changed using shallowEqual check
 *
 * @param value {any} The value to check, with previous cached version
 * @param callback {Function} prevValue => any, Passed in previous value when current value changed
 */
export declare function onChange(value: any, callback: Function): boolean;
export {};
