export const blogs = [
    // Programming & Development
    {
        title: "Implementing JWT Authentication in Rocket.rs with Argon2 Password Hashing",
        description: "A comprehensive guide to implementing secure JWT authentication in Rocket.rs web framework with Argon2 password hashing.",
        url: "https://nishujangra27.hashnode.dev/implementing-jwt-authentication-in-rocketrs",
        tags: ["Rust", "Rocket.rs", "JWT", "Authentication", "Argon2", "Web Development"],
        category: "Programming & Development"
    },
    {
        title: "How to Use Tera Templates with Axum in Rust",
        description: "A step-by-step guide to integrating Tera templates with the Axum web framework in Rust. Learn how to set up the project, configure Tera, render dynamic HTML, and run your server.",
        url: "https://nishujangra27.hashnode.dev/tera-templates-axum-rust",
        tags: ["Rust", "Axum", "Tera Templates", "Web Development", "Backend Programming"],
        category: "Programming & Development"
    },
    {
        title: "Why Rust Forces Immutability?",
        description: "A beginner-friendly explanation of Rust's immutability, how it ensures memory safety, prevents race conditions, and when to use mutable variables with the `mut` keyword.",
        url: "https://medium.com/@nishujangra27/why-rust-forces-immutability-04e40cbf2e46",
        tags: ["Rust", "Immutability", "Memory Safety", "Concurrency", "Programming"],
        category: "Programming & Development"
    },
    {
        title: "Why do we need lifetimes in Rust?",
        description: "A beginner-friendly explanation of why lifetimes exist in Rust, how they prevent dangling references, and how the borrow checker enforces memory safety.",
        url: "https://medium.com/@nishujangra27/why-do-we-need-lifetimes-in-rust-16f12173c30a",
        tags: ["Rust", "Lifetime", "Learning Rust"],
        category: "Programming & Development"
    },
    {
        title: "Implementing Middleware in Rocket.rs",
        description: "A guide to manage middlewares using Request Guard",
        url: "https://nishujangra27.hashnode.dev/implementing-middleware-in-rocketrs-rust",
        tags: ["Rust", "Rocket.rs", "JWT", "Middleware", "Request-Guard"],
        category: "Programming & Development"
    },
    {
        title: "Getting Started with Rocket Fairings: Implementing a Logger",
        description: "Learn how to use Rocket.rs Fairings to implement a request/response logger, with real-world use cases and flow diagrams.",
        url: "https://nishujangra27.hashnode.dev/getting-started-with-rocket-fairings-implementing-a-logger",
        tags: ["Rust", "Rocket.rs", "Fairing", "Logger", "Web Development"],
        category: "Programming & Development"
    },


    // System Administration & Linux Basics
    {
        title: "How to Add a User to the Sudoers in Devuan Linux (Daedalus 5.0)",
        description: "Learn how to add a user to the sudoers file in Devuan Linux for elevated privileges.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Sudoers",
        tags: ["Linux", "System Administration", "Devuan"],
        category: "System Administration & Linux Basics"
    },
    {
        title: "How to Run C/C++ Code in Devuan Linux (Daedalus 5.0)",
        description: "A guide to compiling and running C/C++ code in Devuan Linux, including installation of necessary packages.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/C++",
        tags: ["Linux", "Programming", "C++", "Devuan"],
        category: "System Administration & Linux Basics"
    },
    {
        title: "Reading Root-Protected Files with Sudo — No Password Prompt",
        description: "Learn how to read files that require root access using sudo without being prompted for a password. A neat trick for sysadmins and developers.",
        url: "https://blog.devops.dev/reading-root-protected-files-with-sudo-no-password-prompt-f70a9bdd8ca7",
        tags: ["Linux", "System Administration", "Sudo", "DevOps"],
        category: "System Administration & Linux Basics"
    },
    {
        title: "Fixing DNS Resolution Errors in Linux: A Simple Troubleshooting Guide",
        description: "A comprehensive guide to troubleshooting and fixing DNS resolution issues in Linux systems.",
        url: "https://blog.devops.dev/fixing-dns-resolution-errors-in-linux-a-simple-troubleshooting-guide-d1212a298e46",
        tags: ["Linux", "Networking", "DNS", "Troubleshooting", "DevOps"],
        category: "System Administration & Linux Basics"
    },
    {
        title: "Fixing Brave Browser Snap Error on Ubuntu",
        description: "A troubleshooting guide to resolve Brave Browser startup issues caused by Snap confinement errors on Ubuntu 24.04 with X11.",
        url: "https://medium.com/@nishujangra27/fixing-brave-browser-snap-error-on-ubuntu-647fc2e61a84",
        tags: ["Linux", "Snap", "Brave Browser", "X11", "Ubuntu 24.04"],
        category: "System Administration & Linux Basics"
    },


    // eBPF & Kernel Programming
    {
        title: "Getting Started with eBPF and XDP: A Simple Hello World in Ubuntu",
        description: "Learn what eBPF and XDP are, why they’re so powerful in Linux networking, and how to write, compile, and attach your first XDP Hello World program in Ubuntu.",
        url: "https://medium.com/@nishujangra27/getting-started-with-ebpf-and-xdp-a-simple-hello-world-in-ubuntu-c0e94e29221a", 
        tags: ["eBPF", "XDP", "Linux", "Networking", "Kernel Programming", "Ubuntu"],
        category: "eBPF & Kernel Programming"
    },



    // Networking & Infrastructure
    {
        title: "Creating a Virtual Network in VirtualBox (Linux Host)",
        description: "A detailed guide to creating a custom host-only virtual network in VirtualBox on Linux using a 172.16.0.0/24 subnet. Includes steps for manual IP assignment, DHCP configuration, and attaching the network to virtual machines.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Virtual-Network-VirtualBox",
        tags: ["VirtualBox", "Networking", "Linux", "Host-only Network", "Virtualization"],
        category: "Networking & Infrastructure"
    },

    {
        title: "How to Set Up a Virtual Gateway with NAT in VirtualBox",
        description: "Detailed instructions to configure a virtual NAT gateway in VirtualBox to enable internet access for VMs.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Setting-Up-a-Virtual-Gateway-with-NAT-in-VirtualBox",
        tags: ["VirtualBox", "Networking", "NAT", "Virtualization", "Gateway"],
        category: "Networking & Infrastructure"
    },
    {
        title: "How to Set Up a Local DNS Server Using dnsmasq",
        description: "Learn how to configure a local DNS server using dnsmasq for faster name resolution and local domain mapping.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Setting-Up-a-Local-DNS-Server-Using-dnsmasq",
        tags: ["DNS", "dnsmasq", "Networking", "Local Server"],
        category: "Networking & Infrastructure"
    },

    // Juju & DevOps
    {
        title: "Juju: Deploy PostgreSQL",
        description: "A simple guide to install and set credentials for the postgresql charm in juju",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Juju-Deploy-PostgreSQL",
        tags: ["Juju", "DevOps", "Deployment", "PostgreSQL", "Database"],
        category: "Juju & DevOps"
    },
    {
        title: "Granting Permissions to a PostgreSQL User",
        description: "A short guide on creating a PostgreSQL user and granting database privileges securely.",
        url: "https://medium.com/@nishujangra27/granting-permissions-to-a-postgresql-user-4768f923f96e",
        tags: ["PostgreSQL", "DatabaseSecurity", "SQL", "DevOps", "AccessControl"],
        category: "Juju & DevOps"
    },
    {
        title: "Juju: PostgreSQL Clustering & Replication",
        description: "A step-by-step guide to scale PostgreSQL on Juju by adding multiple units, setting passwords, and verifying replication across the cluster.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Juju-PostgreSQL-Clustering",
        tags: ["Juju", "DevOps", "PostgreSQL", "Database", "Clustering", "Replication", "High Availability"],
        category: "Juju & DevOps"
    },
    {
        title: "Juju: Enable SSL for PostgreSQL",
        description: "Step-by-step guide to secure PostgreSQL connections in Juju using the self-signed-certificates charm and SSL/TLS.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Juju-Enable-SSL-Postgres",
        tags: ["Juju", "DevOps", "PostgreSQL", "Database Security", "SSL", "TLS"],
        category: "Juju & DevOps"
    },
    {
        title: "Getting Started with Juju",
        description: "A comprehensive guide to getting started with Juju for application modeling and deployment.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Getting-Started-Juju",
        tags: ["Juju", "DevOps", "Application Modeling", "Deployment"],
        category: "Juju & DevOps"
    },
    {
        title: "Juju Deployment: Deploying Nginx on Ubuntu Server",
        description: "Learn how to deploy Nginx web server using Juju on Ubuntu Server with best practices.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Juju-Deploy-Nginx-Ubuntu-Server",
        tags: ["Juju", "Nginx", "Ubuntu", "Deployment", "Web Server"],
        category: "Juju & DevOps"
    },
    {
        title: "Juju Troubleshooting",
        description: "Basic Juju troubleshooting tips as I face them and debug them, I will add about those problems in this blog.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Juju-Troubleshooting",
        tags: ["Juju", "Troubleshooting", "Ubuntu"],
        category: "Juju & DevOps"
    },

    // Redis & KeyDB
    {
        title: "How to Install Redis on Devuan Linux (Daedalus 5.0)",
        description: "A step-by-step guide to installing Redis on Devuan Linux, covering prerequisites and installation commands.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Redis-Installation",
        tags: ["Redis", "Database", "Devuan", "Installation"],
        category: "Redis & KeyDB"
    },
    {
        title: "Redis Cluster: What It Is and How to Set It Up on Devuan",
        description: "Learn how to set up a Redis Cluster on Devuan Linux, including configuration and management tips.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Redis-Cluster",
        tags: ["Redis", "Cluster", "Database", "Devuan", "High Availability"],
        category: "Redis & KeyDB"
    },
    {
        title: "How to install KeyDB server in Debian 12 (Bookworm) Linux using PPA Repositories",
        description: "A detailed guide on installing KeyDB server in Debian 12 using PPA repositories.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/KeyDB-Setup",
        tags: ["KeyDB", "Database", "Debian", "Installation"],
        category: "Redis & KeyDB"
    },
    {
        title: "How to setup KeyDB servers with Multi-Master in Debian 12 (Bookworm)",
        description: "Learn how to set up KeyDB servers with Multi-Master configuration in Debian 12.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/KeyDB-Multi-Master",
        tags: ["KeyDB", "Multi-Master", "Database", "Debian", "High Availability"],
        category: "Redis & KeyDB"
    },
    {
        title: "Setting Up Samaritan Proxy to Load Balance Two KeyDB Servers",
        description: "Learn how to set up Samaritan Proxy to load balance two KeyDB servers for improved performance and reliability.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/SAM-Proxy",
        tags: ["KeyDB", "Load Balancing", "Proxy", "Performance", "High Availability"],
        category: "Redis & KeyDB"
    },


    // AI & LLMs
    {
        title: "Setting Up LlamaEdge on Devuan with DeepSeek R1 1.5B",
        description: "Step-by-step guide to setting up LlamaEdge with WasmEdge on a Devuan system. Learn how to run DeepSeek R1 1.5B locally using CLI and a browser-based chatbot UI.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Setup-LlamaEdge",
        tags: ["LlamaEdge", "WasmEdge", "DeepSeek", "LLM", "Devuan", "AI"],
        category: "AI & LLMs"
    },


    // Other DevOps & Tools
    {
        title: "Ansible Lab Setup on Devuan",
        description: "Guide to setting up a basic Ansible lab environment on Devuan for configuration management and automation practice.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Ansible-Lab",
        tags: ["Ansible", "DevOps", "Automation", "Devuan", "Configuration Management"],
        category: "Other DevOps & Tools"
    },
    {
        title: "How to Install Apache CouchDB on Debian",
        description: "Step-by-step guide to installing Apache CouchDB on a Debian-based system, including required dependencies and service configuration.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Install-Apache-CouchDB-on-Debian",
        tags: ["CouchDB", "Database", "Debian", "Installation"],
        category: "Other DevOps & Tools"
    },


    // Deployment
    {
        title: "Setting up a Domain Name and Sub-Domain using Nginx on Debian 13",
        description: "Learn how to set up domain names and sub-domains using Nginx on Debian 13 for web hosting and server configuration.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Setup-Domain-Name-Nginx",
        tags: ["Nginx", "Domain", "Sub-domain", "Debian", "Web Hosting", "Server Configuration"],
        category: "Deployment"
    },

    // Virtualization & Hypervisors
    {
        title: "How to Fix 'VT-x is Being Used by Another Hypervisor' Error in VirtualBox (Linux)",
        description: "A step-by-step guide to resolving the 'VT-x is being used by another hypervisor (VERR_VMX_IN_VMX_ROOT_MODE)' error in VirtualBox on Linux. Learn how to disable KVM/QEMU, stop conflicting services, and reload VirtualBox kernel modules to fix hardware virtualization conflicts.",
        url: "https://medium.com/@nishujangra27/how-to-fix-vt-x-is-being-used-by-another-hypervisor-error-in-virtualbox-linux-2a6d35e57075",
        tags: ["VirtualBox", "Linux", "KVM", "Virtualization", "Troubleshooting"],
        category: "Virtualization & Hypervisors"
    }

];
