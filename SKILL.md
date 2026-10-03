---
name: robotics-spatial-vision-mcp
description: Point cloud ICP alignment, Recast navmesh baking, robot arm inverse kinematics, and LIDAR ground plane filtering for physical AI agents. Use when an autonomous agent needs pointcloud_icp_rigid_registration or related tools.
metadata: { "icon": "https://raw.githubusercontent.com/Whambammy/robotics-spatial-vision-mcp/main/assets/logo.png", "homepage": "https://github.com/Whambammy/robotics-spatial-vision-mcp" }
---

# Robotics & Spatial Vision MCP

**Point cloud ICP alignment, Recast navmesh baking, robot arm inverse kinematics, and LIDAR ground plane filtering for physical AI agents.**

Part of the WHAM ENGINE fleet of deterministic AI agent micro-services with automated **Base L2 HTTP 402 (x402) USDC micropayments**.

---

## Tools Included in this Suite (5 Tools)

- `pointcloud_icp_rigid_registration`: Iterative Closest Point (ICP) algorithm aligning two unorganized 3D point clouds with robust Tukey loss weighting to filter noisy scan outliers.
- `navmesh_recast_baking_validator`: Generates and audits Recast 3D navigation meshes for autonomous agents, checking maximum slope climbing, step-height clearance, and unreachable islands.
- `robot_arm_inverse_kinematics_ccd`: Cyclic Coordinate Descent (CCD) and FABRIK solver computing 6-DOF robotic manipulator joint angles with strict joint-angle limit enforcement.
- `lidar_ground_plane_ransac_filter`: RANSAC plane segmentation isolating ground terrain from foreground obstacles and vehicles in dense unorganized LIDAR point clouds.
- `camera_intrinsics_projection_matrix`: Computes 4x4 perspective and orthographic camera projection matrices, mapping FOV, focal length, sensor dimensions, and near/far clipping planes.

---

## Recommended Workflow

A robotics agent receives multi-sensor LIDAR and camera frames -> runs RANSAC ground plane segmentation -> aligns point clouds using ICP -> computes inverse kinematics to reach an obstacle-free target on a validated Recast navigation mesh.

---

## Quickstart Configuration

Add this server to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "robotics-spatial-vision-mcp": {
      "command": "npx",
      "args": ["-y", "@whambammy/robotics-spatial-vision-mcp"],
      "env": {
        "PAYMENT_WALLET": "0x9793E7269b3301893318dEa8338576Ba612F39B3",
        "BASE_RPC_URL": "https://mainnet.base.org"
      }
    }
  }
}
```

Or connect the skill directly via Smithery:
```bash
smithery skill add whambammy/robotics-spatial-vision-mcp
```
