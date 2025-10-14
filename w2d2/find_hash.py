import hashlib
import time

def find_hash_with_leading_zeros(base_string: str, difficulty: int) -> None:
    """
    通过不断尝试 nonce 来寻找一个满足特定难度（前导零数量）的 SHA-256 哈希值。

    :param base_string: 用于哈希的基础字符串。
    :param difficulty: 要求哈希值开头必须有多少个零。
    """
    nonce = 0
    prefix_zeros = '0' * difficulty
    
    print(f"正在开始计算，目标：找到一个以 '{prefix_zeros}' 开头的哈希值...")
    
    # 记录开始时间
    start_time = time.time()

    while True:
        # 1. 组合字符串：将基础字符串和 nonce 拼接
        text_to_hash = f"{base_string}{nonce}"
        
        # 2. 进行 SHA-256 哈希运算
        #    - 首先需要将字符串编码为字节 (bytes)，通常使用 'utf-8'
        #    - hexdigest() 将哈希结果转换为十六进制字符串
        hash_result = hashlib.sha256(text_to_hash.encode('utf-8')).hexdigest()
        
        # 3. 检查哈希值是否满足条件（以 '0000' 开头）
        if hash_result.startswith(prefix_zeros):
            print("🎉 成功！找到了满足条件的哈希！")
            break  # 找到后跳出循环
            
        # 4. 如果不满足，增加 nonce，进行下一次尝试
        nonce += 1
        
    # 记录结束时间
    end_time = time.time()
    
    # 计算并打印结果
    elapsed_time = end_time - start_time
    
    print("\n---------- 计算结果 ----------")
    print(f"花费时间: {elapsed_time:.4f} 秒")
    print(f"尝试次数 (Nonce): {nonce}")
    print(f"源内容: \"{text_to_hash}\"")
    print(f"哈希值: {hash_result}")
    print("----------------------------")


# --- 主程序入口 ---
if __name__ == "__main__":
    BASE_STRING = "hadesjaky"
    DIFFICULTY = 5  # 目标是 4 个前导零
    
    find_hash_with_leading_zeros(BASE_STRING, DIFFICULTY)
