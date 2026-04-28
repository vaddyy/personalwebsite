"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";

type RevealContextValue = {
  opened: number;
  register: (id: string, open: boolean) => void;
  setItemOpen: (id: string, open: boolean) => void;
  total: number;
  unregister: (id: string) => void;
};

const RevealContext = createContext<RevealContextValue | null>(null);

export function RevealProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Record<string, boolean>>({});

  const register = useCallback((id: string, open: boolean) => {
    setItems((current) => (id in current ? current : { ...current, [id]: open }));
  }, []);

  const unregister = useCallback((id: string) => {
    setItems((current) => {
      if (!(id in current)) {
        return current;
      }

      const next = { ...current };
      delete next[id];
      return next;
    });
  }, []);

  const setItemOpen = useCallback((id: string, open: boolean) => {
    setItems((current) => ({ ...current, [id]: open }));
  }, []);

  const value = useMemo(() => {
    const stateValues = Object.values(items);

    return {
      opened: stateValues.filter(Boolean).length,
      register,
      setItemOpen,
      total: stateValues.length,
      unregister,
    };
  }, [items, register, setItemOpen, unregister]);

  return <RevealContext.Provider value={value}>{children}</RevealContext.Provider>;
}

export function RevealCounter() {
  const context = useContext(RevealContext);
  const opened = context?.opened ?? 0;
  const total = context?.total || 15;

  return (
    <span className="site-counter" aria-label={`${opened} of ${total} reveals open`}>
      R {opened}/{total}
    </span>
  );
}

type RevealProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
  label: string;
};

export function Reveal({ children, defaultOpen = false, label }: RevealProps) {
  const context = useContext(RevealContext);
  const register = context?.register;
  const setItemOpen = context?.setItemOpen;
  const unregister = context?.unregister;
  const id = useId();
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    register?.(id, defaultOpen);

    return () => unregister?.(id);
  }, [defaultOpen, id, register, unregister]);

  useEffect(() => {
    setItemOpen?.(id, open);
  }, [id, open, setItemOpen]);

  return (
    <span className="reveal-node" data-state={open ? "open" : "closed"}>
      <button
        aria-controls={`${id}-content`}
        aria-expanded={open}
        className="reveal-trigger"
        data-state={open ? "open" : "closed"}
        type="button"
        onClick={() => setOpen((current) => !current)}
      >
        {label}
      </button>
      <span className="reveal-content" data-state={open ? "open" : "closed"} id={`${id}-content`}>
        {children}
      </span>
    </span>
  );
}
