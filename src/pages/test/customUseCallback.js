
const prevState = {
    callback: null,
    deps: null
}
const useCallback = (callback, deps) => {
if (!prevState.deps || !deps) {
    prevState.callback = callback;
    prevState.deps = deps;

    return callback;
}
if (shalowEqual(deps, prevState.deps)) {
    return prevState.callback;
}
prevState.callback = callback;
prevState.deps = deps;

return callback;
}

// заметка код useMemo похож на код useCallback
// просто в useCallback просто мемоизируется ссылка, а в useMemo вдобавок и вычисляется новое значение(функция-аргумент хука)
// и если в проекте тупо поменять все useCallback на useMemo то все будет работать

// чем отличается исходник useMemo от us
