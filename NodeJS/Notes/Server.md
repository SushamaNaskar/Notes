# Server
- A server is a computer or system that provides data, services, resources, or
programs to other computers, known as clients, over a network.

A server is essentially a remote computer. You can think of it as a computer whose CPU works remotely.

Servers can be accessed over a network to provide resources and services to other computer programs.


# What Is a Remote Computer?

- A remote computer is any computer that you can connect to and use even though you are not physically near it.
- You can:

* View its screen
* Control its mouse & keyboard
* Run programs
* Transfer files

- All this happens over the internet.

# How Do You Connect to a Remote Computer?

You can connect to a remote computer using different tools and methods depending on your purpose — screen control, file access, programming, or server management.

---

## 1. Remote Desktop Software (GUI Access)

These tools let you **see and control** the other computer’s screen.

### Popular Tools:

- **AnyDesk**
- **TeamViewer**
- **Chrome Remote Desktop**
- **Microsoft Remote Desktop (RDP)**
- **RustDesk (Free & Open Source)**

### Use Case:

- Helping someone fix their PC
- Accessing office computer from home
- Full keyboard & mouse control

---

## 2. SSH (Command Line Access)

**SSH (Secure Shell)** lets developers connect to remote machines using the terminal.

### Example Command:

```bash
ssh username@server-ip-address
```

### Use Case:

- Managing servers (Linux)
- Deploying apps
- File transfers using SCP/SFTP

## 3. Cloud-Based Remote Machines

These are virtual computers in the cloud.

### Platforms:

- AWS EC2
- Google Cloud VM
- Microsoft Azure
- DigitalOcean Droplets

### Use Case:

- Hosting applications
- Running databases
- Remote development environments

## 4. VPN-Based Access (Private Networks)

VPNs let you connect to remote computers inside a private company network.

### Use Case:

- Corporate systems
- Accessing secure office resources
- Remote work setups

## Summary

<table>
<thead>
<tr>
<th>Method </th>
<th>Access Type  </th>
<th>Best For</th>
</tr>
</thead>

<tbody>
<tr>
<td>Remote Desktop Software</td>
<td>Full screen control</td>
<td>Personal or office PC access</td>
</tr>

<tr>
<td>SSH</td>
<td>Command line</td>
<td>Developers &amp; servers</td>
</tr>

  <tr>
      <td>Cloud Machines</td>
      <td>Full remote VM</td>
      <td>Hosting &amp; development</td>
    </tr>
    <tr>
      <td>VPN</td>
      <td>Secure network access</td>
      <td>Corporate environment</td>
    </tr>
</tbody>
</table>
