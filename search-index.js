var searchIndex = JSON.parse('{\
"socket2":{"doc":"Utilities for creating and using sockets.","i":[[3,"SockAddr","socket2","The address of a socket.",null,null],[3,"Socket","","Owned wrapper around a system socket.",null,null],[3,"Domain","","Specification of the communication domain for a socket.",null,null],[3,"Type","","Specification of communication semantics on a socket.",null,null],[3,"Protocol","","Protocol specification used for creating sockets via…",null,null],[3,"RecvFlags","","Flags for incoming messages.",null,null],[11,"from_raw_parts","","Constructs a `SockAddr` from its raw components.",0,[[["socklen_t",6]],["sockaddr",3]]],[11,"family","","Returns this address\'s family.",0,[[],["sa_family_t",6]]],[11,"len","","Returns the size of this address in bytes.",0,[[],["socklen_t",6]]],[11,"as_ptr","","Returns a raw pointer to the address.",0,[[]]],[11,"as_std","","Returns this address as a `SocketAddr` if it is in the…",0,[[],[["socketaddr",4],["option",4]]]],[11,"as_inet","","Returns this address as a `SocketAddrV4` if it is in the…",0,[[],[["option",4],["socketaddrv4",3]]]],[11,"as_inet6","","Returns this address as a `SocketAddrV6` if it is in the…",0,[[],[["option",4],["socketaddrv6",3]]]],[11,"new","","Creates a new socket and sets common flags.",1,[[["type",3],["domain",3],["protocol",3],["option",4]],[["result",6],["socket",3]]]],[11,"new_raw","","Creates a new socket ready to be configured.",1,[[["type",3],["domain",3],["protocol",3],["option",4]],[["result",6],["socket",3]]]],[11,"pair","","Creates a pair of sockets which are connected to each other.",1,[[["type",3],["domain",3],["protocol",3],["option",4]],["result",6]]],[11,"pair_raw","","Creates a pair of sockets which are connected to each other.",1,[[["type",3],["domain",3],["protocol",3],["option",4]],["result",6]]],[11,"bind","","Binds this socket to the specified address.",1,[[["sockaddr",3]],["result",6]]],[11,"connect","","Initiate a connection on this socket to the specified…",1,[[["sockaddr",3]],["result",6]]],[11,"listen","","Mark a socket as ready to accept incoming connection…",1,[[],["result",6]]],[11,"accept","","Accept a new incoming connection from this listener.",1,[[],["result",6]]],[11,"accept_raw","","Accept a new incoming connection from this listener.",1,[[],["result",6]]],[11,"local_addr","","Returns the socket address of the local half of this socket.",1,[[],[["sockaddr",3],["result",6]]]],[11,"peer_addr","","Returns the socket address of the remote peer of this…",1,[[],[["sockaddr",3],["result",6]]]],[11,"try_clone","","Creates a new independently owned handle to the underlying…",1,[[],[["result",6],["socket",3]]]],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",1,[[],[["result",6],["option",4]]]],[11,"set_nonblocking","","Moves this TCP stream into or out of nonblocking mode.",1,[[],["result",6]]],[11,"shutdown","","Shuts down the read, write, or both halves of this…",1,[[["shutdown",4]],["result",6]]],[11,"recv","","Receives data on the socket from the remote address to…",1,[[],["result",6]]],[11,"recv_out_of_band","","Receives out-of-band (OOB) data on the socket from the…",1,[[],["result",6]]],[11,"recv_with_flags","","Identical to `recv` but allows for specification of…",1,[[["c_int",6]],["result",6]]],[11,"recv_vectored","","Receives data on the socket from the remote address to…",1,[[],["result",6]]],[11,"recv_vectored_with_flags","","Identical to `recv_vectored` but allows for specification…",1,[[],["result",6]]],[11,"peek","","Receives data on the socket from the remote adress to…",1,[[],["result",6]]],[11,"recv_from","","Receives data from the socket. On success, returns the…",1,[[],["result",6]]],[11,"recv_from_with_flags","","Identical to `recv_from` but allows for specification of…",1,[[],["result",6]]],[11,"recv_from_vectored","","Receives data from the socket. Returns the amount of bytes…",1,[[],["result",6]]],[11,"recv_from_vectored_with_flags","","Identical to `recv_from_vectored` but allows for…",1,[[],["result",6]]],[11,"peek_from","","Receives data from the socket, without removing it from…",1,[[],["result",6]]],[11,"send","","Sends data on the socket to a connected peer.",1,[[],["result",6]]],[11,"send_with_flags","","Identical to `send` but allows for specification of…",1,[[],["result",6]]],[11,"send_vectored","","Send data to the connected peer. Returns the amount of…",1,[[],["result",6]]],[11,"send_vectored_with_flags","","Identical to `send_vectored` but allows for specification…",1,[[],["result",6]]],[11,"send_out_of_band","","Sends out-of-band (OOB) data on the socket to connected…",1,[[],["result",6]]],[11,"send_to","","Sends data on the socket to the given address. On success,…",1,[[["sockaddr",3]],["result",6]]],[11,"send_to_with_flags","","Identical to `send_to` but allows for specification of…",1,[[["sockaddr",3]],["result",6]]],[11,"send_to_vectored","","Send data to a peer listening on `addr`. Returns the…",1,[[["sockaddr",3]],["result",6]]],[11,"send_to_vectored_with_flags","","Identical to `send_to_vectored` but allows for…",1,[[["sockaddr",3]],["result",6]]],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",1,[[],["result",6]]],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",1,[[],["result",6]]],[11,"unicast_hops_v6","","Gets the value of the `IPV6_UNICAST_HOPS` option for this…",1,[[],["result",6]]],[11,"set_unicast_hops_v6","","Sets the value for the `IPV6_UNICAST_HOPS` option on this…",1,[[],["result",6]]],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",1,[[],["result",6]]],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",1,[[],["result",6]]],[11,"read_timeout","","Returns the read timeout of this socket.",1,[[],[["option",4],["result",6]]]],[11,"set_read_timeout","","Sets the read timeout to the timeout specified.",1,[[["option",4],["duration",3]],["result",6]]],[11,"write_timeout","","Returns the write timeout of this socket.",1,[[],[["option",4],["result",6]]]],[11,"set_write_timeout","","Sets the write timeout to the timeout specified.",1,[[["option",4],["duration",3]],["result",6]]],[11,"broadcast","","Sets the value of the `SO_BROADCAST` option for this socket.",1,[[],["result",6]]],[11,"set_broadcast","","Gets the value of the `SO_BROADCAST` option for this socket.",1,[[],["result",6]]],[11,"multicast_loop_v4","","Gets the value of the `IP_MULTICAST_LOOP` option for this…",1,[[],["result",6]]],[11,"set_multicast_loop_v4","","Sets the value of the `IP_MULTICAST_LOOP` option for this…",1,[[],["result",6]]],[11,"multicast_loop_v6","","Gets the value of the `IPV6_MULTICAST_LOOP` option for…",1,[[],["result",6]]],[11,"set_multicast_loop_v6","","Sets the value of the `IPV6_MULTICAST_LOOP` option for…",1,[[],["result",6]]],[11,"multicast_ttl_v4","","Gets the value of the `IP_MULTICAST_TTL` option for this…",1,[[],["result",6]]],[11,"set_multicast_ttl_v4","","Sets the value of the `IP_MULTICAST_TTL` option for this…",1,[[],["result",6]]],[11,"multicast_hops_v6","","Gets the value of the `IPV6_MULTICAST_HOPS` option for…",1,[[],["result",6]]],[11,"set_multicast_hops_v6","","Sets the value of the `IPV6_MULTICAST_HOPS` option for…",1,[[],["result",6]]],[11,"multicast_if_v4","","Gets the value of the `IP_MULTICAST_IF` option for this…",1,[[],[["result",6],["ipv4addr",3]]]],[11,"set_multicast_if_v4","","Sets the value of the `IP_MULTICAST_IF` option for this…",1,[[["ipv4addr",3]],["result",6]]],[11,"multicast_if_v6","","Gets the value of the `IPV6_MULTICAST_IF` option for this…",1,[[],["result",6]]],[11,"set_multicast_if_v6","","Sets the value of the `IPV6_MULTICAST_IF` option for this…",1,[[],["result",6]]],[11,"join_multicast_v4","","Executes an operation of the `IP_ADD_MEMBERSHIP` type.",1,[[["ipv4addr",3]],["result",6]]],[11,"join_multicast_v6","","Executes an operation of the `IPV6_ADD_MEMBERSHIP` type.",1,[[["ipv6addr",3]],["result",6]]],[11,"leave_multicast_v4","","Executes an operation of the `IP_DROP_MEMBERSHIP` type.",1,[[["ipv4addr",3]],["result",6]]],[11,"leave_multicast_v6","","Executes an operation of the `IPV6_DROP_MEMBERSHIP` type.",1,[[["ipv6addr",3]],["result",6]]],[11,"linger","","Reads the linger duration for this socket by getting the…",1,[[],[["option",4],["result",6]]]],[11,"set_linger","","Sets the linger duration of this socket by setting the…",1,[[["option",4],["duration",3]],["result",6]]],[11,"reuse_address","","Check the `SO_REUSEADDR` option on this socket.",1,[[],["result",6]]],[11,"set_reuse_address","","Set value for the `SO_REUSEADDR` option on this socket.",1,[[],["result",6]]],[11,"recv_buffer_size","","Gets the value of the `SO_RCVBUF` option on this socket.",1,[[],["result",6]]],[11,"set_recv_buffer_size","","Sets the value of the `SO_RCVBUF` option on this socket.",1,[[],["result",6]]],[11,"send_buffer_size","","Gets the value of the `SO_SNDBUF` option on this socket.",1,[[],["result",6]]],[11,"set_send_buffer_size","","Sets the value of the `SO_SNDBUF` option on this socket.",1,[[],["result",6]]],[11,"keepalive","","Returns whether keepalive messages are enabled on this…",1,[[],[["option",4],["result",6]]]],[11,"set_keepalive","","Sets whether keepalive messages are enabled to be sent on…",1,[[["option",4],["duration",3]],["result",6]]],[11,"out_of_band_inline","","Returns the value of the `SO_OOBINLINE` flag of the…",1,[[],["result",6]]],[11,"set_out_of_band_inline","","Sets the `SO_OOBINLINE` flag of the underlying socket. as…",1,[[],["result",6]]],[11,"reuse_port","","Check the value of the `SO_REUSEPORT` option on this socket.",1,[[],["result",6]]],[11,"set_reuse_port","","Set value for the `SO_REUSEPORT` option on this socket.",1,[[],["result",6]]],[11,"nodelay","","Gets the value of the `TCP_NODELAY` option on this socket.",1,[[],["result",6]]],[11,"set_nodelay","","Sets the value of the `TCP_NODELAY` option on this socket.",1,[[],["result",6]]],[18,"UNIX","","Domain for Unix socket communication, corresponding to…",2,null],[18,"PACKET","","Domain for low-level packet interface, corresponding to…",2,null],[11,"nonblocking","","Set `SOCK_NONBLOCK` on the `Type`.",3,[[],["type",3]]],[11,"cloexec","","Set `SOCK_CLOEXEC` on the `Type`.",3,[[],["type",3]]],[11,"is_end_of_record","","Check if the message terminates a record.",4,[[]]],[11,"is_out_of_band","","Check if the message contains out-of-band data.",4,[[]]],[11,"unix","","Constructs a `SockAddr` with the family `AF_UNIX` and the…",0,[[],[["sockaddr",3],["result",6]]]],[11,"accept4","","Accept a new incoming connection from this listener.",1,[[["c_int",6]],["result",6]]],[11,"set_cloexec","","Sets `CLOEXEC` on the socket.",1,[[],["result",6]]],[11,"mss","","Gets the value of the `TCP_MAXSEG` option on this socket.",1,[[],["result",6]]],[11,"set_mss","","Sets the value of the `TCP_MAXSEG` option on this socket.",1,[[],["result",6]]],[11,"mark","","Gets the value for the `SO_MARK` option on this socket.",1,[[],["result",6]]],[11,"set_mark","","Sets the value for the `SO_MARK` option on this socket.",1,[[],["result",6]]],[18,"IPV4","","Domain for IPv4 communication, corresponding to `AF_INET`.",2,null],[18,"IPV6","","Domain for IPv6 communication, corresponding to `AF_INET6`.",2,null],[11,"for_address","","Returns the correct domain for `address`.",2,[[["socketaddr",4]],["domain",3]]],[18,"STREAM","","Type corresponding to `SOCK_STREAM`.",3,null],[18,"DGRAM","","Type corresponding to `SOCK_DGRAM`.",3,null],[18,"SEQPACKET","","Type corresponding to `SOCK_SEQPACKET`.",3,null],[18,"RAW","","Type corresponding to `SOCK_RAW`.",3,null],[18,"ICMPV4","","Protocol corresponding to `ICMPv4`.",5,null],[18,"ICMPV6","","Protocol corresponding to `ICMPv6`.",5,null],[18,"TCP","","Protocol corresponding to `TCP`.",5,null],[18,"UDP","","Protocol corresponding to `UDP`.",5,null],[11,"is_truncated","","Check if the message contains a truncated datagram.",4,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"drop","","",1,[[]]],[11,"from","","",0,[[["socketaddr",4]],["sockaddr",3]]],[11,"from","","",0,[[["socketaddrv4",3]],["sockaddr",3]]],[11,"from","","",0,[[["socketaddrv6",3]],["sockaddr",3]]],[11,"from","","",1,[[["tcpstream",3]],["socket",3]]],[11,"from","","",1,[[["tcplistener",3]],["socket",3]]],[11,"from","","",1,[[["udpsocket",3]],["socket",3]]],[11,"from","","",1,[[["unixstream",3]],["socket",3]]],[11,"from","","",1,[[["unixlistener",3]],["socket",3]]],[11,"from","","",1,[[["unixdatagram",3]],["socket",3]]],[11,"from","","",2,[[["c_int",6]],["domain",3]]],[11,"from","","",3,[[["c_int",6]],["type",3]]],[11,"from","","",5,[[["c_int",6]],["protocol",3]]],[11,"clone","","",2,[[],["domain",3]]],[11,"clone","","",3,[[],["type",3]]],[11,"clone","","",5,[[],["protocol",3]]],[11,"clone","","",4,[[],["recvflags",3]]],[11,"eq","","",2,[[["domain",3]]]],[11,"ne","","",2,[[["domain",3]]]],[11,"eq","","",3,[[["type",3]]]],[11,"ne","","",3,[[["type",3]]]],[11,"eq","","",5,[[["protocol",3]]]],[11,"ne","","",5,[[["protocol",3]]]],[11,"eq","","",4,[[["recvflags",3]]]],[11,"ne","","",4,[[["recvflags",3]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"read","","",1,[[],["result",6]]],[11,"read_vectored","","",1,[[],["result",6]]],[11,"write","","",1,[[],["result",6]]],[11,"write_vectored","","",1,[[],["result",6]]],[11,"flush","","",1,[[],["result",6]]],[11,"as_raw_fd","","",1,[[],["c_int",6]]],[11,"from_raw_fd","","",1,[[["c_int",6]],["socket",3]]],[11,"into_raw_fd","","",1,[[],["c_int",6]]]],"p":[[3,"SockAddr"],[3,"Socket"],[3,"Domain"],[3,"Type"],[3,"RecvFlags"],[3,"Protocol"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);