"use client";

import { useState } from "react";
import { Share2, Check, Copy, Twitter, Linkedin } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonProps {
  title: string;
}

export default function ShareButton({ title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        toast.success("Link copied to clipboard!", {
          description: "You can now share this article with your network.",
        });
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      toast.error("Failed to copy link.");
    }
  };

  const handleTwitterShare = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Check out "${title}" on Dhaka Founders:`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
    }
  };

  const handleLinkedInShare = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-sky-600 hover:border-sky-300 transition-colors shadow-xs cursor-pointer"
        title="Copy article link"
      >
        {copied ? (
          <>
            <Check size={14} className="text-emerald-500" />
            <span className="text-emerald-600 font-medium">Copied!</span>
          </>
        ) : (
          <>
            <Copy size={14} className="text-slate-500" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      <button
        onClick={handleTwitterShare}
        className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-sky-500 hover:border-sky-300 transition-colors shadow-xs cursor-pointer"
        title="Share on X / Twitter"
      >
        <Twitter size={14} />
      </button>

      <button
        onClick={handleLinkedInShare}
        className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-sky-700 hover:border-sky-300 transition-colors shadow-xs cursor-pointer"
        title="Share on LinkedIn"
      >
        <Linkedin size={14} />
      </button>
    </div>
  );
}
