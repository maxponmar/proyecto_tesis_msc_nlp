python3 preprocess.py data.txt dccuchile/bert-base-spanish-wwm-uncased 128 > test.txt

python3 run_ner.py --data_dir /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/data \
    --labels /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/data/labels.txt \
    --model_name_or_path /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/pretrainedmodel \
    --output_dir /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/results \
    --max_seq_length  128 \
    --num_train_epochs 40 \
    --per_gpu_train_batch_size 16 \
    --save_steps 100 \
    --seed 42 \
    --do_predict \
    --overwrite_cache \
    --overwrite_output_dir \
    --save_total_limit 2 \
    --learning_rate 3e-05
