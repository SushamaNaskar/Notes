# What’s the Similarities Between Docker and a VM?
- Docker and virtual machines (VMs) are two technologies used in application deployment.
- In the software development lifecycle, deployment prepares the application code to run for your end users.


# What’s the Difference Between Docker and a VM?

🎯 One-Line Mental Model
VM → Full computer (heavy) / full OS per app
Docker → Just app + environment (lightweight) / shared kernel for multiple apps

🖥️ VM:

👉 “New computer inside your computer”

```
App → OS → Kernel → Hardware
```

```
[ Hardware ]
     ↑
[ Host OS ]
     ↑
[ Hypervisor ]
     ↑
[ Guest OS (Full OS + Kernel) ]
     ↑
[ Application ]
```

🐳 Docker:
👉 “App with everything it needs, using existing OS”

```
App → Host Kernel → Hardware
```

```
[ Hardware ]
     ↑
[ Host OS Kernel ]
     ↑
[ Docker Engine ]
     ↑
[ Container (App + Dependencies) ]
[ Container (App + Dependencies) ]
[ Container (App + Dependencies) ]
```

COMPUTER
│
├── 🖥️ Virtual Machine (VM)
│     ├── Acts like a full new computer
│     ├── Has its own OS (Windows/Linux)
│     ├── Has its own Kernel
│     └── Runs apps inside that OS
│
└── 🐳 Docker (Containers)
      ├── Runs applications (Node, React, Java, etc.)
      ├── No full OS inside
      ├── Shares host OS Kernel
      ├── Uses isolation (namespaces)
      └── Lightweight & fast