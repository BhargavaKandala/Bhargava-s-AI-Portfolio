export const projects = [
  {
    id: "satellite-super-resolution",
    title: "Satellite Image Super-Resolution",
    category: "Deep Learning · Remote Sensing",
    shortDescription: "Turns 10 m Sentinel-2 imagery into 2.5 m super-resolved GeoTIFFs, with uncertainty maps, spectral-consistency metrics, and a downstream land-cover test that checks the added detail is actually useful.",
    tags: ["PyTorch", "Python", "OpenCV", "rasterio"],
    image: "/textures/gallery/timberkittyprzod.webp",
    link: "https://github.com/BhargavaKandala/Satellite-Super-Resolution-using-DL",
    caseStudy: {
      overview: "Built for Smart India Hackathon 2026 (PS-142): deep-learning based Super Resolution Mapping from medium-resolution satellite imagery, producing a 4x super-resolved GeoTIFF alongside an uncertainty map and a full geospatial validation report.",
      challenge: "Ordinary image upscaling optimises for how sharp a picture looks. Satellite imagery has to stay spectrally faithful — the pixel values are measurements, so invented detail that shifts a band is worse than no detail at all.",
      approach: "Evaluated against a bicubic control on four metrics that capture different failure modes: PSNR and SSIM for reconstruction, SAM for spectral angle, and ERGAS for relative global error. Added a downstream land-cover classification to test whether the extra resolution helps a real task rather than just the metrics.",
      solution: "A training, evaluation, and inference pipeline with a Streamlit dashboard, validated end to end on a real Sentinel-2 scene (Hyderabad, 2024-04-27, 0% cloud).",
      technologies: ["PyTorch", "Python", "OpenCV", "rasterio", "scikit-image", "Streamlit", "NumPy"],
      keyFeatures: [
        "10 m to 2.5 m super-resolution on Sentinel-2 GeoTIFFs",
        "Per-pixel uncertainty maps alongside every output",
        "Spectral-consistency metrics (SAM, ERGAS) not just PSNR/SSIM",
        "Downstream land-cover experiment validating real-world benefit",
        "Streamlit dashboard for inference and comparison"
      ],
      results: "Improved on the bicubic baseline across every metric on a real Sentinel-2 scene — PSNR 30.26 to 32.04 dB, SSIM 0.634 to 0.753, SAM 4.467 to 3.765 degrees, ERGAS 4.927 to 4.038 — and raised downstream land-cover accuracy from 0.6303 to 0.6946. Outputs are labelled as containing AI-inferred information and are not presented as direct observation."
    }
  },
  {
    id: "self-correcting-code-assistant",
    title: "Self-Correcting Code Assistant",
    category: "Agentic AI · Local LLM",
    shortDescription: "An agent that writes Python, runs it, reads its own error messages, rewrites the broken code, and retries until the tests pass — entirely on local inference.",
    tags: ["Python", "LangChain", "Ollama"],
    image: "/textures/gallery/bioprzod.webp",
    link: "https://github.com/BhargavaKandala/Self-correcting-Code-Assistant",
    caseStudy: {
      overview: "Most coding assistants generate once and stop; whether the code works is someone else's problem. This one closes the loop, feeding execution results back into the model so a traceback becomes the input to the next attempt.",
      challenge: "Deciding whether generated code actually worked. The obvious check — process exit code 0 — fails badly: on an early run the model hit an unresolvable ModuleNotFoundError and 'fixed' the program by reducing it to a single `import csv`. That exits cleanly and computes nothing.",
      approach: "The model was not malfunctioning; it optimised exactly the signal it was given, and the signal was wrong. Any success check weak enough to be satisfied without solving the task eventually will be. So verification was split into two gates — an import gate catching syntax errors and module-level crashes, and a test gate catching wrong answers and silent no-ops — with hidden assertions the agent never sees.",
      solution: "A retry loop with a fixed attempt budget, running against locally served models so there are no API keys or per-run costs.",
      technologies: ["Python", "LangChain", "Ollama", "deepseek-coder", "pytest"],
      keyFeatures: [
        "Execution feedback loop: tracebacks become the next prompt",
        "Two-stage verification (import gate, then test gate)",
        "Hidden per-task assertions the agent cannot read",
        "Runs fully locally — no API key, no cloud calls",
        "Reproducible benchmark harness with repeat runs"
      ],
      results: "Benchmarked over three full passes with a 5-attempt budget on CPU inference, solving tasks in a median of one attempt where the naive single-shot approach silently failed."
    }
  },
  {
    id: "jarvis-os",
    title: "JARVIS-OS",
    category: "Voice AI · Agentic Systems",
    shortDescription: "A fully local, voice-driven AI command centre — speech in and out never leaves the machine, skills are mapped into the model at runtime, and long-term memory lives in a Markdown graph.",
    tags: ["Python", "LangChain", "Gemini", "ONNX"],
    image: "/textures/gallery/youngmultiprzod.webp",
    link: "https://github.com/BhargavaKandala/JARVIS-V0.1",
    caseStudy: {
      overview: "A voice-driven assistant and agentic command centre for Windows, built around a decoupled architecture: separate subsystems for listening, thinking, remembering, and displaying.",
      challenge: "Voice assistants usually trade privacy for capability — the speech pipeline is the part most likely to be shipped to a cloud API. Keeping speech recognition and synthesis on-device while still getting usable latency and natural output.",
      approach: "Speech recognition runs on faster-whisper on local CPU with ahead-of-time ambient calibration to avoid clipping. Synthesis runs Kokoro through ONNX. Skills live in dynamic subdirectories, evaluated and appended to the model's execution scope at runtime, so new capabilities are added without touching the core.",
      solution: "A multi-threaded CustomTkinter interface where audio capture, orchestration, and text streaming run on separate background threads so the UI never blocks on inference.",
      technologies: ["Python", "LangChain", "Gemini", "faster-whisper", "Kokoro ONNX", "CustomTkinter", "uv"],
      keyFeatures: [
        "Offline speech-to-text and text-to-speech pipeline",
        "Runtime skill discovery and dynamic capability mapping",
        "Long-term memory as a local Markdown graph rather than a database",
        "Decoupled multi-threaded HUD that never freezes during inference"
      ],
      results: "The most-starred project on the profile, and the largest in scope — a working daily-driver assistant rather than a demo."
    }
  },
  {
    id: "multi-agent-app-builder",
    title: "Multi-Agent App Builder",
    category: "Agentic AI · Code Generation",
    shortDescription: "Turns a one-line app idea into working code through a pipeline of specialised local agents — planner, developer, tester, reviewer — with the reviewer reading the tester's report.",
    tags: ["Python", "LangChain", "Ollama"],
    image: "/textures/gallery/bioprzod.webp",
    link: "https://github.com/BhargavaKandala/multi-agent-app-builder",
    caseStudy: {
      overview: "A single prompt asking a model to 'build me an app' produces mediocre results. The same model, asked to do one clearly defined job at a time, does much better — so the work is split the way a real development team splits it.",
      challenge: "Chaining four prompts together is not the same as having a pipeline. Without real handoffs, each stage just restates the last one and the review step becomes cosmetic.",
      approach: "Two details make the difference. The reviewer is given both the code and the tester's criticism of that code, which turns review into an actual fix. And every agent is instructed to label code blocks with their filename, so the orchestrator can parse them out and write real files.",
      solution: "An Executor that is deliberately not an AI agent — ordinary Python that passes each agent's output to the next, times every stage, extracts files from markdown, and writes a runnable project to a build folder.",
      technologies: ["Python", "LangChain", "Ollama", "rich", "pytest"],
      keyFeatures: [
        "Four specialised agents: planner, developer, tester, reviewer",
        "Reviewer consumes the tester's report, not just the code",
        "Filename-labelled code blocks parsed into real files on disk",
        "Per-stage timing and a runnable project as output",
        "No API keys and no per-run cost — served locally by Ollama"
      ],
      results: "Produces a runnable project directory from a single sentence of input, rather than a wall of terminal text."
    }
  },
  {
    id: "offline-slm-agent",
    title: "Fully Offline SLM Agent",
    category: "Agentic AI · Tool Calling",
    shortDescription: "A tool-calling agent running entirely on a laptop with a 4B local model, where the reason-act-observe loop is written out in plain Python instead of hidden behind a framework.",
    tags: ["Python", "Ollama"],
    image: "/textures/gallery/timberkittyprzod.webp",
    link: "https://github.com/BhargavaKandala/Fully-Offline-AI-agent-using-SLM",
    caseStudy: {
      overview: "A ReAct agent powered by qwen3:4b served locally by Ollama, able to call six real tools — arithmetic, saving, reading and listing notes, telling the time, and counting words.",
      challenge: "Most 'AI agent' tutorials secretly depend on a cloud API, so the moment Wi-Fi drops they stop working. The framework layer also hides the reasoning loop, which makes the mechanism hard to learn from.",
      approach: "The reason-act-observe loop is hand-written in plain Python without LangChain or smolagents in the way. Every request stays on loopback, so the offline claim is structural rather than aspirational.",
      solution: "A small, readable agent shipped with separate docs for running it, for the code walkthrough with a full end-to-end request trace, and for the underlying concepts.",
      technologies: ["Python", "Ollama", "qwen3:4b", "python-dotenv"],
      keyFeatures: [
        "Hand-written ReAct loop with no agent framework",
        "Six working tools including a calculator that avoids eval()",
        "Every request stays on 127.0.0.1 — verifiably offline",
        "Three-tier documentation: usage, code walkthrough, concepts"
      ],
      results: "Keeps running with airplane mode switched on partway through a session, which is the whole point."
    }
  }
];
