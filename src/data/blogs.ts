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

    // Networking & Infrastructure
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

    // Other DevOps & Tools
    {
        title: "Ansible Lab Setup on Devuan",
        description: "Guide to setting up a basic Ansible lab environment on Devuan for configuration management and automation practice.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Ansible-Lab",
        tags: ["Ansible", "DevOps", "Automation", "Devuan", "Configuration Management"],
        category: "Other DevOps & Tools"
    },
    // {
    //     title: "Canine Setup: Lightweight Container Orchestration with Docker Compose",
    //     description: "Learn how to install and run Canine, a lightweight Docker-based container orchestration tool, with practical usage tips.",
    //     url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Canine-Setup",
    //     tags: ["Docker", "Container Orchestration", "Canine", "DevOps"],
    //     category: "Other DevOps & Tools"
    // },
    {
        title: "How to Install Apache CouchDB on Debian",
        description: "Step-by-step guide to installing Apache CouchDB on a Debian-based system, including required dependencies and service configuration.",
        url: "https://bitbucket.org/tirveni/devuan/wiki/nishant/Install-Apache-CouchDB-on-Debian",
        tags: ["CouchDB", "Database", "Debian", "Installation"],
        category: "Other DevOps & Tools"
    }
];
