### The CDASim Project & CARMA-CARLA ROS 2 Integration

A full-stack ROS 2 integration for the CARLA autonomous vehicle simulator and connected systems.

---

##### [GitHub Page](https://github.com/usdot-fhwa-stol/carma-carla-integration)
##### [Carla UE5 Wiki](https://carla-ue5.readthedocs.io/en/latest/)
---

### About

The **CARMA-CARLA Integration Bridge** is a critical software component that enables high-fidelity co-simulation for the U.S. Department of Transportation's CARMA Platform. It connects the world-class vehicle dynamics of the **CARLA simulator** with the cooperative driving automation logic of CARMA, allowing for robust, scalable testing of autonomous vehicle behaviors.

Working for **Leidos** through the **University of Georgia's MSC Lab**, my primary role was to spearhead the migration of this entire integration stack from **ROS 1 to ROS 2**, refactoring the codebase, overhauling the build system, and engineering custom solutions to restore critical functionalities that were deprecated in newer versions of the CARLA simulator. As a CS Junior at UGA, this was a great learning experience.

A key deliverable of my work was the development of a custom **ROS 2 bridge** from the ground up. This implementation successfully re-established the full vehicle and sensor transform framework, and is now pending review for potential adoption by the official CARLA team in Spain. I also developed my own fork of the bridge which you can find here: [https://github.com/willv678/carla-ros2-bridge](https://github.com/willv678/carla-ros2-bridge).

---

### Technical Deep Dive

This project involved a full-stack effort, from low-level vehicle control logic to high-level system architecture and deployment. I successfully resolved **over 20 complex engineering tickets**, representing more than 75 story points of development work.

#### Key Contributions

-   **ROS 1 to ROS 2 Migration**: I converted the entire ROS 1 codebase, which included 15+ nodes, to ROS 2 (Humble). This involved updating the build system from `catkin` to `colcon`, converting XML launch files to modern Python launch scripts, and refactoring all node communication to use the `rclpy` client library.

-   **Custom ROS 2 Bridge Development**: When the native transform publisher was removed from the official CARLA simulator, I architected and developed a new ROS 2 bridge from scratch. This component is now responsible for publishing the critical `map` -> `vehicle` -> `sensor` transforms, which are essential for the CARMA Platform's localization and route-planning systems to function.

-   **Vehicle Control & PID Tuning**: A major challenge was debugging the vehicle control pipeline. After connecting all the components, the vehicle would not respond correctly to commands. I diagnosed and fixed the issue by tuning the PID controller parameters in the `ackermann_control` node and resolving coordinate system mismatches between ROS and CARLA, enabling the vehicle to accurately follow complex trajectories.

![CARLA Simulation In Action](https://i.imgur.com/your-gif-link-here.gif)
#### A successful test run in CARLA, with the vehicle correctly navigating a turn after the control system fixes were implemented.

-   **Full-Stack Debugging**: I was responsible for identifying and fixing bugs across the entire simulation stack. This involved a methodical process of isolating components, verifying topic and service connections with command-line tools (`ros2 topic echo/info`), and injecting debug logs to trace data flow from the high-level CARMA guidance nodes all the way down to the final control commands being sent to the simulator.

---

### Closing Thoughts

This project was an incredible deep dive into the real-world challenges of integrating complex robotics systems. Moving a tool of this scale from ROS 1 to ROS 2 was more than just a code update; it was a complete architectural refactoring that required a deep understanding of every component in the stack. I'm proud to have contributed code that is now a fundamental part of a national research platform, helping to test and validate the autonomous vehicle technologies that will define the future of transportation. Thanks for reading!