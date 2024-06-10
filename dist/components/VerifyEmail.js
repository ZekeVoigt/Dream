"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@/trpc/client");
var lucide_react_1 = require("lucide-react");
var image_1 = __importDefault(require("next/image"));
var link_1 = __importDefault(require("next/link"));
var button_1 = require("./ui/button");
var react_1 = __importDefault(require("react"));
var VerifyEmail = function (_a) {
    var token = _a.token;
    var _b = client_1.trpc.auth.VerifyEmail.useQuery({
        token: token,
    }), data = _b.data, isLoading = _b.isLoading, isError = _b.isError;
    if (isError) {
        return (react_1.default.createElement("div", { className: "flex flex-col items-center gap-2" },
            react_1.default.createElement(lucide_react_1.XCircle, { className: "h-8 w-8 text-red-600" }),
            react_1.default.createElement("h3", { className: "font-semibold text-xl" }, "There Was A Problem Loading"),
            react_1.default.createElement("p", { className: "text-muted-foreground text-sm" }, "This token is not valid or might be expired. Please try again.")));
    }
    if (data === null || data === void 0 ? void 0 : data.success) {
        return (react_1.default.createElement("div", { className: "flex  flex-col items-center justify-center mt-200" },
            react_1.default.createElement("div", { className: "relative mb-1 text-muted-foreground" },
                react_1.default.createElement(image_1.default, { src: "/dream-email-completed.png", width: 400, height: 300, alt: "the email was sent" })),
            react_1.default.createElement("h3", { className: "font-semibold text-2xl" }, "You're all set!"),
            react_1.default.createElement("p", { className: "  text-center font-semibold" },
                "Thanks for joining ",
                react_1.default.createElement("span", { className: "text-pink-600" }, "Dream")),
            react_1.default.createElement(link_1.default, { className: (0, button_1.buttonVariants)({ className: "mt-4" }), href: "/sign-in" }, "Login")));
    }
    if (isLoading) {
        return (react_1.default.createElement("div", { className: "flex flex-col items-center gap-2" },
            react_1.default.createElement(lucide_react_1.Loader2, { className: "animate-spin h-8 w-8 text-zinc-300" }),
            react_1.default.createElement("h3", { className: "font-semibold text-xl" }, "Verifying..."),
            react_1.default.createElement("p", { className: "text-muted-foreground text-sm" }, "This won't take long.")));
    }
};
exports.default = VerifyEmail;
