import hashlib
import time
import ecdsa
import binascii

# --- 第 1 部分：生成 ECDSA 公私钥对 ---

print("---------- 1. 密钥生成 ----------")

# 使用 SECP256k1 曲线，这是比特币和以太坊使用的曲线
private_key = ecdsa.SigningKey.generate(curve=ecdsa.SECP256k1)
public_key = private_key.get_verifying_key()

# 将密钥对象转换为十六进制字符串以便显示
private_key_hex = private_key.to_string().hex()
public_key_hex = public_key.to_string().hex()

print(f"私钥 (Private Key): {private_key_hex}")
print(f"公钥 (Public Key):  {public_key_hex}")
print("---------------------------------\n")


# --- 第 2 部分：工作量证明 (Proof of Work) ---

print("---------- 2. 工作量证明 (PoW) ----------")
BASE_STRING = "hadesjaky"
DIFFICULTY = 4  # 目标是 4 个前导零
prefix_zeros = '0' * DIFFICULTY
nonce = 0

print(f"正在计算，目标：找到一个以 '{prefix_zeros}' 开头的哈希值...")
start_time = time.time()

while True:
    # 组合字符串
    message_to_hash = f"{BASE_STRING}{nonce}"
    
    # 进行 SHA-256 哈希
    hash_result = hashlib.sha256(message_to_hash.encode('utf-8')).hexdigest()
    
    # 检查是否满足条件
    if hash_result.startswith(prefix_zeros):
        print("🎉 成功！找到了满足条件的哈希！")
        break
        
    nonce += 1

end_time = time.time()
elapsed_time = end_time - start_time

print(f"花费时间: {elapsed_time:.4f} 秒")
print(f"尝试次数 (Nonce): {nonce}")
print(f"满足条件的消息: \"{message_to_hash}\"")
print(f"该消息的哈希值: {hash_result}")
print("---------------------------------\n")


# --- 第 3 部分：签名与验证 ---

print("---------- 3. 签名与验证 ----------")

# 准备要签名的消息
# 签名函数需要的是字节串 (bytes)，所以必须进行编码
message_bytes = message_to_hash.encode('utf-8')

# 3.1 使用私钥进行签名
print("正在使用私钥进行签名...")
signature = private_key.sign(message_bytes)
signature_hex = signature.hex()
print(f"生成的数字签名 (Hex): {signature_hex}")

# 3.2 使用公钥进行验证
print("\n正在使用公钥、原始消息和签名进行验证...")
try:
    # 验证函数需要：公钥、签名、原始消息（字节串）
    # 如果验证成功，它会返回 True。
    # 如果验证失败，它会抛出 ecdsa.BadSignatureError 异常。
    is_valid = public_key.verify(signature, message_bytes)
    if is_valid:
        print("✅ 验证成功！签名是有效的。")
        print("这证明了签名确实是由持有对应私钥的人生成的。")
    # 实际上，如果 verify 不抛出异常，结果就是 True，所以 else 分支不会执行
    # else:
    #     print("❌ 验证失败！签名无效。")

except ecdsa.BadSignatureError:
    print("❌ 验证失败！签名无效。")
    print("这可能意味着：1. 消息被篡改；2. 签名是伪造的；3. 使用了错误的公钥。")

print("---------------------------------")
