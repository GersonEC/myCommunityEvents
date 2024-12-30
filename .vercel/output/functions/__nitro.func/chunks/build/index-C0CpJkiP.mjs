import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { I as I$1, _ as _t, v as vt, w as wt } from '../nitro/nitro.mjs';
import h__default from 'react';
import { Pencil, Trash } from 'lucide-react';
import { useForm } from '@tanstack/react-form';
import { ToastContainer, toast } from 'react-toastify';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import '@tanstack/react-router';
import 'tiny-invariant';
import '@prisma/client';
import 'node:async_hooks';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import '@tanstack/react-cross-context';

const _ = ({ event: n, handleDelete: l, handleEdit: d }) => jsxs("div", { style: { minWidth: "400px", maxWidth: "700px", width: "95%" }, children: [jsxs("div", { style: { display: "flex", justifyContent: "end", paddingRight: "12px", marginBottom: "4px" }, children: [jsx("button", { style: { borderRadius: "4px", background: "none", border: "none", color: "gray" }, onClick: () => d(n), children: jsx(Pencil, {}) }), jsx("button", { style: { borderRadius: "4px", background: "none", border: "none", color: "gray" }, onClick: () => l(n.id), children: jsx(Trash, {}) })] }), jsxs("div", { style: { border: "solid #582F0E", borderRadius: "8px", backgroundColor: "#FAEDCD", display: "flex", gap: "8px", alignItems: "center", boxSizing: "border-box", maxHeight: "350px", paddingRight: "32px", boxShadow: "rgba(100, 0, 0, 0.24) 0px 3px 8px", margin: "0 8px" }, children: [jsx("div", { style: { minWidth: "70px", display: "flex", justifyContent: "center" }, children: jsx("span", { style: { fontSize: "2rem" }, children: "\u{1F5D3}\uFE0F" }) }), jsxs("div", { children: [jsx("h2", { children: jsx("a", { style: { color: "#0E577B" }, href: n.eventLink, target: "_blank", rel: "noopener noreferrer", children: n.eventTitle }) }), jsx("p", { style: {}, children: n.eventDescription }), jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: "12px" }, children: [jsx("p", { children: n.eventDate.toLocaleDateString("it-IT") }), jsx("p", { children: n.communityName })] })] })] })] }), j = "/_build/assets/skyline-milano-BEzzB3lN.png", y = (n) => {
  const l = { id: n.mode === "add" ? "" : n.event.id, communityName: n.mode === "add" ? "" : n.event.communityName, eventDate: n.mode === "add" ? /* @__PURE__ */ new Date() : n.event.eventDate, eventDescription: n.mode === "add" ? "" : n.event.eventDescription, eventLink: n.mode === "add" ? "" : n.event.eventLink, eventTitle: n.mode === "add" ? "" : n.event.eventTitle }, d = useForm({ defaultValues: l, onSubmit: async ({ value: t }) => {
    n.mode === "add" ? n.handleAdd(t) : n.handleEdit(t);
  } });
  return jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }, children: [jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [jsx("h2", { style: { color: "white" }, children: n.mode === "add" ? "Add new Event" : "Edit Event" }), jsx("button", { style: { borderRadius: "4px", border: "1px solid white", background: "none", fontWeight: "600", color: "white", padding: "8px" }, onClick: n.handleClose, title: "Close", children: "X" })] }), jsxs("form", { style: { display: "flex", flexDirection: "column", gap: "16px", fontSize: "1rem", color: "white" }, onSubmit: (t) => {
    t.preventDefault(), t.stopPropagation(), d.handleSubmit();
  }, children: [jsx("div", { style: { width: "100%" }, children: jsx(d.Field, { name: "communityName", children: (t) => jsxs("div", { children: [jsx("label", { htmlFor: t.name, children: jsx("p", { style: { margin: "2px 0" }, children: "Community Name" }) }), jsx("input", { style: { width: "100%", padding: "6px 2px", borderStyle: "none", borderRadius: "2px", backgroundColor: "#DDDDDD" }, name: t.name, value: t.state.value, onBlur: t.handleBlur, onChange: (r) => t.handleChange(r.target.value) })] }) }) }), jsx("div", { style: { width: "100%" }, children: jsx(d.Field, { name: "eventTitle", children: (t) => jsxs(Fragment, { children: [jsx("label", { htmlFor: t.name, children: jsx("p", { style: { margin: "2px 0" }, children: "Event Title" }) }), jsx("input", { style: { width: "100%", padding: "6px 2px", borderStyle: "none", borderRadius: "2px", backgroundColor: "#DDDDDD" }, name: t.name, value: t.state.value, onBlur: t.handleBlur, onChange: (r) => t.handleChange(r.target.value) })] }) }) }), jsx("div", { style: { width: "100%" }, children: jsx(d.Field, { name: "eventDescription", children: (t) => jsxs(Fragment, { children: [jsx("label", { htmlFor: t.name, children: jsx("p", { style: { margin: "2px 0" }, children: "Event Description" }) }), jsx("textarea", { style: { width: "100%", padding: "6px 2px", borderStyle: "none", borderRadius: "2px", backgroundColor: "#DDDDDD" }, name: t.name, rows: 5, maxLength: 300, value: t.state.value, onBlur: t.handleBlur, onChange: (r) => t.handleChange(r.target.value) })] }) }) }), jsx("div", { style: { width: "100%" }, children: jsx(d.Field, { name: "eventLink", children: (t) => jsxs(Fragment, { children: [jsx("label", { htmlFor: t.name, children: jsx("p", { style: { margin: "2px 0" }, children: "Event Link" }) }), jsx("input", { style: { width: "100%", padding: "6px 2px", borderStyle: "none", borderRadius: "2px", backgroundColor: "#DDDDDD" }, name: t.name, value: t.state.value, onBlur: t.handleBlur, onChange: (r) => t.handleChange(r.target.value) })] }) }) }), jsx("div", { style: { width: "100%" }, children: jsx(d.Field, { name: "eventDate", children: (t) => jsxs(Fragment, { children: [jsx("label", { htmlFor: t.name, children: jsx("p", { style: { margin: "2px 0" }, children: "Event Date" }) }), jsx("input", { style: { width: "100%", padding: "6px 2px", borderStyle: "none", borderRadius: "2px", backgroundColor: "#DDDDDD" }, name: t.name, type: "date", min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), value: t.state.value.toISOString().slice(0, 10), onBlur: t.handleBlur, onChange: (r) => t.handleChange(new Date(r.target.value)) })] }) }) }), jsx("div", { style: { display: "flex", justifyContent: "center" }, children: jsx("button", { style: { color: "rgba(32,34,38,255)", backgroundColor: "white", borderRadius: "4px", border: "1px solid white", padding: "6px 24px", fontWeight: "600" }, type: "submit", children: "Submit" }) })] })] });
}, g = I$1({ method: "POST" }).validator((n) => n).handler(_t($, "c_1n1tvvr", "$$function0"), async ({ data: n }) => await vt.event.create({ data: n })), x = I$1({ method: "POST" }).validator((n) => n).handler(_t(A, "c_1n1tvvr", "$$function1"), async ({ data: n }) => await vt.event.delete({ where: { id: n } })), b = I$1({ method: "POST" }).validator((n) => n).handler(_t(I, "c_1n1tvvr", "$$function2"), async ({ data: n }) => await vt.event.update({ where: { id: n.id }, data: n })), ee = function() {
  const [l, d] = h__default.useState({ isOpen: false, mode: "add" }), [t, r] = h__default.useState([]), [f, D] = h__default.useState(), w = () => {
    d({ isOpen: true, mode: "add" });
  };
  h__default.useEffect(() => {
    (async () => {
      try {
        const o = await wt();
        r(o);
      } catch (o) {
        console.error(o);
      }
    })();
  }, []);
  const C = async (a) => {
    try {
      await g({ data: a }), r([...t, a]), d({ isOpen: false, mode: "add" }), toast("\u2705 Event created successfully");
    } catch {
      toast("\u274C Ops.. something went wrong");
    }
  }, E = async (a) => {
    try {
      await b({ data: a });
      const o = [...t], m = o.findIndex((k) => k.id === a.id);
      o[m] = a, r(o), d({ isOpen: false, mode: "add" }), toast("\u2705 Event updated successfully");
    } catch {
      toast("\u274C Ops.. something went wrong");
    }
  }, S = async (a) => {
    if (window.confirm("Are you sure you want to delte this event?")) try {
      const o = t.filter((m) => m.id !== a);
      r(o), await x({ data: a }), toast("\u2705 Event deleted successfully");
    } catch {
      toast("\u274C Ops.. something went wrong");
    }
  };
  return jsxs("div", { children: [jsxs("nav", { style: { display: "flex", justifyContent: "space-between" }, children: [jsx("h1", { style: { margin: "0", color: "white", fontSize: "1.3rem", fontFamily: "cursive" }, children: "My Community Events" }), jsx("button", { style: { color: "white", backgroundColor: "rgba(32,34,38,255)", borderRadius: "4px", border: "1px solid white", boxShadow: "rgba(255, 255, 255, 50) 1px 1px 2px 0px", padding: "4px 12px" }, onClick: w, children: jsx("span", { children: "Add Event" }) })] }), l.isOpen && jsx("div", { style: { position: "fixed", top: 0, left: 0, height: "100%", width: "100%", backgroundColor: "rgba(0,0,0, 0.8)" }, children: jsx("dialog", { style: { backgroundColor: "rgba(32,34,38,255)", border: "solid gray", borderRadius: "8px", width: "80%", maxWidth: "600px", minWidth: "250px", position: "absolute", top: "20%" }, open: l.isOpen, children: l.mode === "add" ? jsx(y, { mode: "add", handleAdd: C, handleClose: () => d({ isOpen: false, mode: "add" }) }) : jsx(y, { mode: "edit", handleEdit: E, handleClose: () => d({ isOpen: false, mode: "add" }), event: f != null ? f : {} }) }) }), jsx("div", { style: { display: "flex", justifyContent: "center" }, children: jsx("div", { style: { maxWidth: "700px" }, children: jsx("img", { style: { margin: "auto", width: "100%" }, src: j }) }) }), jsxs("div", { style: { display: "flex", justifyContent: "center" }, children: [jsx("div", { style: { display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", gap: "40px" }, children: t.map((a) => jsx(_, { event: a, handleDelete: S, handleEdit: () => {
    d({ isOpen: true, mode: "edit" }), D(a);
  } }, a.id)) }), jsx(ToastContainer, { theme: "dark", autoClose: 3e3 })] })] });
};
function $(n) {
  return g.__executeServer(n);
}
function A(n) {
  return x.__executeServer(n);
}
function I(n) {
  return b.__executeServer(n);
}

export { $ as $$function0, A as $$function1, I as $$function2, ee as component };
//# sourceMappingURL=index-C0CpJkiP.mjs.map
